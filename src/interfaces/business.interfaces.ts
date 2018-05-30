export interface IClient {
    client_id: string;
    client_secret: string;
    redirect_uris: string[];
    scope: string;
    tenantCode: string;
}

// export interface IUsersObj {
//     [key: string]: IUser;
// }

export interface IOptionsUri {
    error?: string;
    code?: string;
    state?: string;
}

export interface IPersistedPassword {
    salt: string;
    hashedPassword: string;
}

export interface IContext {
    accessToken?: any;
    tenantCode?: string;
    requestId?: string;
}
