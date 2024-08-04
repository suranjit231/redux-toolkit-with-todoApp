//===== middleware in redux receives 3 parameter 
//===== store , next , action

export const loggerMiddleware = (store)=>{

    return function(next){

        return function(action){
            //==== log the actions
            console.log(`[LOG]: ${action.type} - ${new Date().toString()}`);

            //===== call next middleware in the pipeline =====//
            next(action);

            //===== log the modified state after perform the actions ====//
            console.log("state after modified: ", store.getState())

        }
    }
}