import * as yup from 'yup';

export const challengeResponseValidationSchema = yup.object().shape({
  text: yup.string().required(),
  created_by: yup.string().nullable().required(),
});
