const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  index: celebrate({ [Segments.QUERY]: Joi.object().keys({ page: Joi.number().required() }) }),
  delete: celebrate({
    [Segments.PARAMS]: Joi.object()
      .keys({ id: Joi.number().required() })
  }),
  store: celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().min(1).required()
    })
  })
};
