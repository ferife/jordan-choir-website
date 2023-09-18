export const validateAddToCartForm = (values) => {
    const errorMods = {};
    const errors = {};
    
    for (const mod in values.modifiers) {
        if (values.modifiers[mod] === 'Not Selected') errorMods[mod] = 'Required';
    }

    if (Object.keys(errorMods).length > 0) {
        errors['modifiers'] = errorMods;
    }

    if (values.tier === 'Not Selected') { 
        errors.tier = 'Required';
    }

    return errors;
};