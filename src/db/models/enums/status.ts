// ---
// Modern, type-safe status enum pattern for TypeScript
//
// 1. Object + derived type (recommended)
//
// This approach uses a plain object to define all possible status values, and derives a type from its values.
//
// - Keeps the type and values always in sync
// - Prevents typos and ensures only valid status values are used
// - Allows you to use string values directly (better for DBs/APIs)
// - Easy to update: add/remove statuses in one place
// - Can be exported and used in Mongoose schemas, validation, etc.
//
// Usage example:
//   import { statusEnum, Status } from "./enums/status";
//   status: { type: String, enum: Object.values(statusEnum) as Status[], ... }
//
export const statusEnum = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  SUSPENDED: "suspended",
} as const;

export type Status = (typeof statusEnum)[keyof typeof statusEnum];

// ---
// 2. Traditional TypeScript enum (less flexible for DBs)
//
// export enum StatusEnum {
//   ACTIVE = "active",
//   INACTIVE = "inactive",
//   SUSPENDED = "suspended",
// }
//
// Usage: StatusEnum.ACTIVE, etc. (but harder to use with Mongoose string enums)

// ---
// 3. Union type (simple, but no central object for values)
//
// export type Status = "active" | "inactive" | "suspended";
//
// Usage: type only, no object to export for enum values

// ---
// Summary:
// - The object + derived type pattern is the most maintainable and interoperable for modern TypeScript apps, especially with ORMs/ODMs like Mongoose.
