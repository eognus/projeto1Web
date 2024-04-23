import { USER_FORBIDDEN } from "../../libs/errors.js";
export const authUser = (app) => async (request, reply) => {
    try{
        request.user.isAdmin = true;
        return;
    }catch(error){
        request.log.error(error);
        throw new USER_FORBIDDEN();
    }
    
};