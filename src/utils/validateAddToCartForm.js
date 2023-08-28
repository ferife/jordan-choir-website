export const validateAddToCartForm = (values) => {
    const errors = {};

    if (values.size === 'Not Selected') { 
        errors.size = 'Required';
    }
    if (values.color === 'Not Selected') { 
        errors.color = 'Required';
    }

    if (values.tier === 'Not Selected') { 
        errors.tier = 'Required';
    }

    return errors;
};