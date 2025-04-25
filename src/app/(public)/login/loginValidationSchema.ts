import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import z from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty(apiErrorMessages.login[ErrorKeyEnum.emailRequired]?.user)
    .email({
      message: apiErrorMessages.login[ErrorKeyEnum.invalidEmail]?.user,
    }),
  password: z
    .string()
    .nonempty(apiErrorMessages.login[ErrorKeyEnum.passwordRequired]?.user),
});

export { loginSchema };
