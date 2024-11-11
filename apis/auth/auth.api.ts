import axios from "axios";
import authConstants from "./auth.const";

export const getLoginGoogleUrl = () => {
  const params = {
    client_id: authConstants.keycloak.clientId,
    redirect_uri: authConstants.keycloak.redirectUri,
    response_type: "code",
  };
  const loginUrl = new URL(
    `${authConstants.keycloak.keycloakServer}/realms/youtube/protocol/openid-connect/auth`
  );
  loginUrl.search = new URLSearchParams(params).toString();

  window.location.href = loginUrl.toString();
};

export const getAccessTokenKeycloak = async (code: string) => {
  const { clientId, clientSecret } = authConstants.keycloak;

  const params = {
    grant_type: "authorization_code",
    redirect_uri: authConstants.keycloak.redirectUri,
    code,
  };

  const keycloakUrl = `${authConstants.keycloak.keycloakServer}/realms/youtube/protocol/openid-connect/token`

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": `Basic ${btoa(clientId + ":" + clientSecret)}`
  }

  const response = await axios.post(keycloakUrl, params, {
    headers: headers,
  })

  if (response.status !== 200) {
    throw new Error("Failed to get access token");
  }

  return response.data?.access_token;
};

export const getUserInfo = async (access_token: string): Promise<GetUserInfoResponse> => {
  try {
    const keycloakUrl = `${authConstants.keycloak.keycloakServer}/realms/youtube/protocol/openid-connect/userinfo`
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    }
  
    const response = await axios.get(keycloakUrl, {
      headers: headers,
    })
  
    if (response.status !== 200) {
      throw new Error("Failed to get user info");
    }
  
    console.log(`User info: ${JSON.stringify(response.data)}`)
  
    return {
      isLogin: true,
      userInfo: response.data
    }
    
  } catch (error) {
    console.error(`Failed to get user info: ${error}`)
    return {
      isLogin: false,
      userInfo: null
    }
  }
}
