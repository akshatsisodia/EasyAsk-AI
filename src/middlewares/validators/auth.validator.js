import { check, validationResult } from "express-validator";

// Middleware to check results and return standardized response
export function validate (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((e) => ({ param: e.param, msg: e.msg })),
    });
  }
  next();
}

// Validation rules for user registration
export const validateRegister = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Username is required')
    .isLength({ min: 4 })
    .withMessage('Username must be at least 3 characters')
    .trim(),

  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Provide a valid email address')
    .normalizeEmail(),

  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/\d/)
    .withMessage('Password must contain at least one number'),

  validate
];

// Optional: validation for login (email/username + password)
export const validateLogin = [
  check('email')
    .optional()
    .isEmail()
    .withMessage('Provide a valid email address')
    .normalizeEmail(),

  check('username')
  .optional()
  .isLength({ min: 3 })
  .withMessage('Username must be at least 3 characters')
  .trim(),

  check('password')
  .exists({ checkFalsy: true })
  .withMessage('Password is required'),

  validate
];


