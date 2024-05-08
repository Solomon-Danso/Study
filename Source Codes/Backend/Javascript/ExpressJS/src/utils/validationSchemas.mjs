export const createUserValidation = {
    fname: {
        isLength:{
            options:{min:5, max:32},
            errorMessage:"Must be betwen 5 to 32 characters"
        },

        notEmpty:{
            errorMessage:  "Username cannot be empty"
        },
        isString:{
            errorMessage:"Must be a string"
        },


    },

    displayName: {
        isLength:{
            options:{min:5, max:32},
            errorMessage:"Must be betwen 5 to 32 characters"
        },

        notEmpty:{
            errorMessage:  "Username cannot be empty"
        },
        isString:{
            errorMessage:"Must be a string"
        },


    }







}