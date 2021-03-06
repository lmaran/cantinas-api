// import { tokenService } from "../services";
// import logger from "../logger";

// export const getAccessToken = async (req, res, next) => {
//     // check the auth header first
//     const auth = req.headers.authorization;
//     let inToken;
//     if (auth && auth.toLowerCase().indexOf("bearer") === 0) {
//         inToken = auth.slice("bearer ".length);
//     } else if (req.body && req.body.access_token) {
//         // not in the header, check in the form body
//         inToken = req.body.access_token;
//     } else if (req.query && req.query.access_token) {
//         inToken = req.query.access_token;
//     }

//     logger.debug("Incoming token: %s", inToken);

//     const token = await tokenService.getAccessToken(inToken);
//     if (token) {
//         logger.debug("We found a matching token: %s", inToken);
//     } else {
//         logger.debug("No matching token was found.");
//     }
//     req.ctx.accessToken = token;
//     next();
//     return;

// };

// export const requireAccessToken = (req, res, next) => {
//     if (req.ctx.accessToken) {
//         next();
//     } else {
//         res.status(401).end();
//     }
// };
