interface UserInfo {
    sub: string; // unique identifier for the user
    name?: string;
    given_name?: string;
    family_name?: string;
    preferred_username?: string;
    email?: string;
    email_verified?: boolean;   
    image?: string;
}

interface GetUserInfoResponse {
    isLogin: boolean;
    userInfo: UserInfo | null;
}