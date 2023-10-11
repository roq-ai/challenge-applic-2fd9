import * as yup from 'yup';

export const challengeValidationSchema = yup.object().shape({
  description: yup.string().required(),
  creator_id: yup.string().nullable().required(),
});
