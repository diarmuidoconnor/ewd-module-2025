export default (dependencies) => {

    const { contactsValidator } = dependencies;

    const validateContact = async (request, response, next) => {
        // Input
        try {
            const validated = await contactsValidator.validateAsync(request.body)
            request.body = validated
            next()
        } catch (err) {
            next(new Error( err.message))
        }
    }

    return {
        validateContact
    };

}