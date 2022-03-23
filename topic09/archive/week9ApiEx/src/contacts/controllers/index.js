export const listContacts = (req, res, next) => {

    res.status(200).send("A List of contacts");
};
// get a contact
export const getContact = (req, res, next) => {
    const id = req.params.id; //gets id param from URL
    //usually retrieve details for customer but for now just return id
    return res.status(200).end(`id parameter from URL is ${id}`);
};

export const createContact = (req, res, next) => {
    req.body.date = new Date();
    //just echo the request json body in the response
    res.json(req.body).end();
};

