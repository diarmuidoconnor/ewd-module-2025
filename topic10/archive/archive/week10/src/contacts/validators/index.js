//* validators/register.validator.js
import Joi from 'joi';
import JoiDate from '@joi/date';

const NewJoi = Joi.extend(JoiDate);

const contactsSchema = Joi.object({
    password:Joi.string().min(7).required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/),
    phone:Joi.string().regex(/^\s*\+?\s*([0-9][\s-]*){9,}$/),
    type:Joi.string().valid('FRIEND','FAMILY','OTHER').uppercase(),
    dob:NewJoi.date().format("DD/MM/YYYY"),
    email: Joi.string().email().lowercase().required(),
    userName: Joi.string().min(5).required(),
    name:Joi.string().alphanum().min(2).max(30)

});


export default contactsSchema