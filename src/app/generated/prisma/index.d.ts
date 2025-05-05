
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Navigation
 * 
 */
export type Navigation = $Result.DefaultSelection<Prisma.$NavigationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ItemCategory
 * 
 */
export type ItemCategory = $Result.DefaultSelection<Prisma.$ItemCategoryPayload>
/**
 * Model ItemType
 * 
 */
export type ItemType = $Result.DefaultSelection<Prisma.$ItemTypePayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleEnum: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum]

}

export type RoleEnum = $Enums.RoleEnum

export const RoleEnum: typeof $Enums.RoleEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Navigations
 * const navigations = await prisma.navigation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Navigations
   * const navigations = await prisma.navigation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.navigation`: Exposes CRUD operations for the **Navigation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Navigations
    * const navigations = await prisma.navigation.findMany()
    * ```
    */
  get navigation(): Prisma.NavigationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemCategory`: Exposes CRUD operations for the **ItemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCategories
    * const itemCategories = await prisma.itemCategory.findMany()
    * ```
    */
  get itemCategory(): Prisma.ItemCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemType`: Exposes CRUD operations for the **ItemType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemTypes
    * const itemTypes = await prisma.itemType.findMany()
    * ```
    */
  get itemType(): Prisma.ItemTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Navigation: 'Navigation',
    User: 'User',
    ItemCategory: 'ItemCategory',
    ItemType: 'ItemType',
    Item: 'Item'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "navigation" | "user" | "itemCategory" | "itemType" | "item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Navigation: {
        payload: Prisma.$NavigationPayload<ExtArgs>
        fields: Prisma.NavigationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavigationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavigationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          findFirst: {
            args: Prisma.NavigationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavigationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          findMany: {
            args: Prisma.NavigationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>[]
          }
          create: {
            args: Prisma.NavigationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          createMany: {
            args: Prisma.NavigationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavigationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>[]
          }
          delete: {
            args: Prisma.NavigationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          update: {
            args: Prisma.NavigationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          deleteMany: {
            args: Prisma.NavigationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavigationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavigationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>[]
          }
          upsert: {
            args: Prisma.NavigationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationPayload>
          }
          aggregate: {
            args: Prisma.NavigationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigation>
          }
          groupBy: {
            args: Prisma.NavigationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavigationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavigationCountArgs<ExtArgs>
            result: $Utils.Optional<NavigationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ItemCategory: {
        payload: Prisma.$ItemCategoryPayload<ExtArgs>
        fields: Prisma.ItemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findFirst: {
            args: Prisma.ItemCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findMany: {
            args: Prisma.ItemCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          create: {
            args: Prisma.ItemCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          createMany: {
            args: Prisma.ItemCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          delete: {
            args: Prisma.ItemCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          update: {
            args: Prisma.ItemCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ItemCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          aggregate: {
            args: Prisma.ItemCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCategory>
          }
          groupBy: {
            args: Prisma.ItemCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryCountAggregateOutputType> | number
          }
        }
      }
      ItemType: {
        payload: Prisma.$ItemTypePayload<ExtArgs>
        fields: Prisma.ItemTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          findFirst: {
            args: Prisma.ItemTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          findMany: {
            args: Prisma.ItemTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>[]
          }
          create: {
            args: Prisma.ItemTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          createMany: {
            args: Prisma.ItemTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>[]
          }
          delete: {
            args: Prisma.ItemTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          update: {
            args: Prisma.ItemTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          deleteMany: {
            args: Prisma.ItemTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>[]
          }
          upsert: {
            args: Prisma.ItemTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTypePayload>
          }
          aggregate: {
            args: Prisma.ItemTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemType>
          }
          groupBy: {
            args: Prisma.ItemTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ItemTypeCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    navigation?: NavigationOmit
    user?: UserOmit
    itemCategory?: ItemCategoryOmit
    itemType?: ItemTypeOmit
    item?: ItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NavigationCountOutputType
   */

  export type NavigationCountOutputType = {
    children: number
  }

  export type NavigationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | NavigationCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * NavigationCountOutputType without action
   */
  export type NavigationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationCountOutputType
     */
    select?: NavigationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NavigationCountOutputType without action
   */
  export type NavigationCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationWhereInput
  }


  /**
   * Count Type ItemCategoryCountOutputType
   */

  export type ItemCategoryCountOutputType = {
    itemType: number
  }

  export type ItemCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | ItemCategoryCountOutputTypeCountItemTypeArgs
  }

  // Custom InputTypes
  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryCountOutputType
     */
    select?: ItemCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeCountItemTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTypeWhereInput
  }


  /**
   * Count Type ItemTypeCountOutputType
   */

  export type ItemTypeCountOutputType = {
    items: number
  }

  export type ItemTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ItemTypeCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemTypeCountOutputType without action
   */
  export type ItemTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTypeCountOutputType
     */
    select?: ItemTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemTypeCountOutputType without action
   */
  export type ItemTypeCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Navigation
   */

  export type AggregateNavigation = {
    _count: NavigationCountAggregateOutputType | null
    _avg: NavigationAvgAggregateOutputType | null
    _sum: NavigationSumAggregateOutputType | null
    _min: NavigationMinAggregateOutputType | null
    _max: NavigationMaxAggregateOutputType | null
  }

  export type NavigationAvgAggregateOutputType = {
    order: number | null
  }

  export type NavigationSumAggregateOutputType = {
    order: number | null
  }

  export type NavigationMinAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    isActive: boolean | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    order: number | null
  }

  export type NavigationMaxAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    isActive: boolean | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    order: number | null
  }

  export type NavigationCountAggregateOutputType = {
    id: number
    label: number
    url: number
    isActive: number
    parentId: number
    createdAt: number
    updatedAt: number
    order: number
    _all: number
  }


  export type NavigationAvgAggregateInputType = {
    order?: true
  }

  export type NavigationSumAggregateInputType = {
    order?: true
  }

  export type NavigationMinAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isActive?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    order?: true
  }

  export type NavigationMaxAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isActive?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    order?: true
  }

  export type NavigationCountAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isActive?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    order?: true
    _all?: true
  }

  export type NavigationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navigation to aggregate.
     */
    where?: NavigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigations to fetch.
     */
    orderBy?: NavigationOrderByWithRelationInput | NavigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Navigations
    **/
    _count?: true | NavigationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavigationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavigationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavigationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavigationMaxAggregateInputType
  }

  export type GetNavigationAggregateType<T extends NavigationAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigation[P]>
      : GetScalarType<T[P], AggregateNavigation[P]>
  }




  export type NavigationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationWhereInput
    orderBy?: NavigationOrderByWithAggregationInput | NavigationOrderByWithAggregationInput[]
    by: NavigationScalarFieldEnum[] | NavigationScalarFieldEnum
    having?: NavigationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavigationCountAggregateInputType | true
    _avg?: NavigationAvgAggregateInputType
    _sum?: NavigationSumAggregateInputType
    _min?: NavigationMinAggregateInputType
    _max?: NavigationMaxAggregateInputType
  }

  export type NavigationGroupByOutputType = {
    id: string
    label: string
    url: string | null
    isActive: boolean
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    order: number
    _count: NavigationCountAggregateOutputType | null
    _avg: NavigationAvgAggregateOutputType | null
    _sum: NavigationSumAggregateOutputType | null
    _min: NavigationMinAggregateOutputType | null
    _max: NavigationMaxAggregateOutputType | null
  }

  type GetNavigationGroupByPayload<T extends NavigationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavigationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavigationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavigationGroupByOutputType[P]>
            : GetScalarType<T[P], NavigationGroupByOutputType[P]>
        }
      >
    >


  export type NavigationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    isActive?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    parent?: boolean | Navigation$parentArgs<ExtArgs>
    children?: boolean | Navigation$childrenArgs<ExtArgs>
    _count?: boolean | NavigationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navigation"]>

  export type NavigationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    isActive?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    parent?: boolean | Navigation$parentArgs<ExtArgs>
  }, ExtArgs["result"]["navigation"]>

  export type NavigationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    isActive?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    parent?: boolean | Navigation$parentArgs<ExtArgs>
  }, ExtArgs["result"]["navigation"]>

  export type NavigationSelectScalar = {
    id?: boolean
    label?: boolean
    url?: boolean
    isActive?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
  }

  export type NavigationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "url" | "isActive" | "parentId" | "createdAt" | "updatedAt" | "order", ExtArgs["result"]["navigation"]>
  export type NavigationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Navigation$parentArgs<ExtArgs>
    children?: boolean | Navigation$childrenArgs<ExtArgs>
    _count?: boolean | NavigationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NavigationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Navigation$parentArgs<ExtArgs>
  }
  export type NavigationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Navigation$parentArgs<ExtArgs>
  }

  export type $NavigationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Navigation"
    objects: {
      parent: Prisma.$NavigationPayload<ExtArgs> | null
      children: Prisma.$NavigationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      url: string | null
      isActive: boolean
      parentId: string | null
      createdAt: Date
      updatedAt: Date
      order: number
    }, ExtArgs["result"]["navigation"]>
    composites: {}
  }

  type NavigationGetPayload<S extends boolean | null | undefined | NavigationDefaultArgs> = $Result.GetResult<Prisma.$NavigationPayload, S>

  type NavigationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavigationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavigationCountAggregateInputType | true
    }

  export interface NavigationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Navigation'], meta: { name: 'Navigation' } }
    /**
     * Find zero or one Navigation that matches the filter.
     * @param {NavigationFindUniqueArgs} args - Arguments to find a Navigation
     * @example
     * // Get one Navigation
     * const navigation = await prisma.navigation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavigationFindUniqueArgs>(args: SelectSubset<T, NavigationFindUniqueArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Navigation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavigationFindUniqueOrThrowArgs} args - Arguments to find a Navigation
     * @example
     * // Get one Navigation
     * const navigation = await prisma.navigation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavigationFindUniqueOrThrowArgs>(args: SelectSubset<T, NavigationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navigation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationFindFirstArgs} args - Arguments to find a Navigation
     * @example
     * // Get one Navigation
     * const navigation = await prisma.navigation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavigationFindFirstArgs>(args?: SelectSubset<T, NavigationFindFirstArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Navigation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationFindFirstOrThrowArgs} args - Arguments to find a Navigation
     * @example
     * // Get one Navigation
     * const navigation = await prisma.navigation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavigationFindFirstOrThrowArgs>(args?: SelectSubset<T, NavigationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Navigations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Navigations
     * const navigations = await prisma.navigation.findMany()
     * 
     * // Get first 10 Navigations
     * const navigations = await prisma.navigation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigationWithIdOnly = await prisma.navigation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavigationFindManyArgs>(args?: SelectSubset<T, NavigationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Navigation.
     * @param {NavigationCreateArgs} args - Arguments to create a Navigation.
     * @example
     * // Create one Navigation
     * const Navigation = await prisma.navigation.create({
     *   data: {
     *     // ... data to create a Navigation
     *   }
     * })
     * 
     */
    create<T extends NavigationCreateArgs>(args: SelectSubset<T, NavigationCreateArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Navigations.
     * @param {NavigationCreateManyArgs} args - Arguments to create many Navigations.
     * @example
     * // Create many Navigations
     * const navigation = await prisma.navigation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavigationCreateManyArgs>(args?: SelectSubset<T, NavigationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Navigations and returns the data saved in the database.
     * @param {NavigationCreateManyAndReturnArgs} args - Arguments to create many Navigations.
     * @example
     * // Create many Navigations
     * const navigation = await prisma.navigation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Navigations and only return the `id`
     * const navigationWithIdOnly = await prisma.navigation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavigationCreateManyAndReturnArgs>(args?: SelectSubset<T, NavigationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Navigation.
     * @param {NavigationDeleteArgs} args - Arguments to delete one Navigation.
     * @example
     * // Delete one Navigation
     * const Navigation = await prisma.navigation.delete({
     *   where: {
     *     // ... filter to delete one Navigation
     *   }
     * })
     * 
     */
    delete<T extends NavigationDeleteArgs>(args: SelectSubset<T, NavigationDeleteArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Navigation.
     * @param {NavigationUpdateArgs} args - Arguments to update one Navigation.
     * @example
     * // Update one Navigation
     * const navigation = await prisma.navigation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavigationUpdateArgs>(args: SelectSubset<T, NavigationUpdateArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Navigations.
     * @param {NavigationDeleteManyArgs} args - Arguments to filter Navigations to delete.
     * @example
     * // Delete a few Navigations
     * const { count } = await prisma.navigation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavigationDeleteManyArgs>(args?: SelectSubset<T, NavigationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navigations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Navigations
     * const navigation = await prisma.navigation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavigationUpdateManyArgs>(args: SelectSubset<T, NavigationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Navigations and returns the data updated in the database.
     * @param {NavigationUpdateManyAndReturnArgs} args - Arguments to update many Navigations.
     * @example
     * // Update many Navigations
     * const navigation = await prisma.navigation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Navigations and only return the `id`
     * const navigationWithIdOnly = await prisma.navigation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NavigationUpdateManyAndReturnArgs>(args: SelectSubset<T, NavigationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Navigation.
     * @param {NavigationUpsertArgs} args - Arguments to update or create a Navigation.
     * @example
     * // Update or create a Navigation
     * const navigation = await prisma.navigation.upsert({
     *   create: {
     *     // ... data to create a Navigation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Navigation we want to update
     *   }
     * })
     */
    upsert<T extends NavigationUpsertArgs>(args: SelectSubset<T, NavigationUpsertArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Navigations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationCountArgs} args - Arguments to filter Navigations to count.
     * @example
     * // Count the number of Navigations
     * const count = await prisma.navigation.count({
     *   where: {
     *     // ... the filter for the Navigations we want to count
     *   }
     * })
    **/
    count<T extends NavigationCountArgs>(
      args?: Subset<T, NavigationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavigationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Navigation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavigationAggregateArgs>(args: Subset<T, NavigationAggregateArgs>): Prisma.PrismaPromise<GetNavigationAggregateType<T>>

    /**
     * Group by Navigation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavigationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavigationGroupByArgs['orderBy'] }
        : { orderBy?: NavigationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavigationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Navigation model
   */
  readonly fields: NavigationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Navigation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavigationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Navigation$parentArgs<ExtArgs> = {}>(args?: Subset<T, Navigation$parentArgs<ExtArgs>>): Prisma__NavigationClient<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Navigation$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Navigation$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Navigation model
   */
  interface NavigationFieldRefs {
    readonly id: FieldRef<"Navigation", 'String'>
    readonly label: FieldRef<"Navigation", 'String'>
    readonly url: FieldRef<"Navigation", 'String'>
    readonly isActive: FieldRef<"Navigation", 'Boolean'>
    readonly parentId: FieldRef<"Navigation", 'String'>
    readonly createdAt: FieldRef<"Navigation", 'DateTime'>
    readonly updatedAt: FieldRef<"Navigation", 'DateTime'>
    readonly order: FieldRef<"Navigation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Navigation findUnique
   */
  export type NavigationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter, which Navigation to fetch.
     */
    where: NavigationWhereUniqueInput
  }

  /**
   * Navigation findUniqueOrThrow
   */
  export type NavigationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter, which Navigation to fetch.
     */
    where: NavigationWhereUniqueInput
  }

  /**
   * Navigation findFirst
   */
  export type NavigationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter, which Navigation to fetch.
     */
    where?: NavigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigations to fetch.
     */
    orderBy?: NavigationOrderByWithRelationInput | NavigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navigations.
     */
    cursor?: NavigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navigations.
     */
    distinct?: NavigationScalarFieldEnum | NavigationScalarFieldEnum[]
  }

  /**
   * Navigation findFirstOrThrow
   */
  export type NavigationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter, which Navigation to fetch.
     */
    where?: NavigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigations to fetch.
     */
    orderBy?: NavigationOrderByWithRelationInput | NavigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Navigations.
     */
    cursor?: NavigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Navigations.
     */
    distinct?: NavigationScalarFieldEnum | NavigationScalarFieldEnum[]
  }

  /**
   * Navigation findMany
   */
  export type NavigationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter, which Navigations to fetch.
     */
    where?: NavigationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Navigations to fetch.
     */
    orderBy?: NavigationOrderByWithRelationInput | NavigationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Navigations.
     */
    cursor?: NavigationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Navigations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Navigations.
     */
    skip?: number
    distinct?: NavigationScalarFieldEnum | NavigationScalarFieldEnum[]
  }

  /**
   * Navigation create
   */
  export type NavigationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * The data needed to create a Navigation.
     */
    data: XOR<NavigationCreateInput, NavigationUncheckedCreateInput>
  }

  /**
   * Navigation createMany
   */
  export type NavigationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Navigations.
     */
    data: NavigationCreateManyInput | NavigationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Navigation createManyAndReturn
   */
  export type NavigationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * The data used to create many Navigations.
     */
    data: NavigationCreateManyInput | NavigationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Navigation update
   */
  export type NavigationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * The data needed to update a Navigation.
     */
    data: XOR<NavigationUpdateInput, NavigationUncheckedUpdateInput>
    /**
     * Choose, which Navigation to update.
     */
    where: NavigationWhereUniqueInput
  }

  /**
   * Navigation updateMany
   */
  export type NavigationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Navigations.
     */
    data: XOR<NavigationUpdateManyMutationInput, NavigationUncheckedUpdateManyInput>
    /**
     * Filter which Navigations to update
     */
    where?: NavigationWhereInput
    /**
     * Limit how many Navigations to update.
     */
    limit?: number
  }

  /**
   * Navigation updateManyAndReturn
   */
  export type NavigationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * The data used to update Navigations.
     */
    data: XOR<NavigationUpdateManyMutationInput, NavigationUncheckedUpdateManyInput>
    /**
     * Filter which Navigations to update
     */
    where?: NavigationWhereInput
    /**
     * Limit how many Navigations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Navigation upsert
   */
  export type NavigationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * The filter to search for the Navigation to update in case it exists.
     */
    where: NavigationWhereUniqueInput
    /**
     * In case the Navigation found by the `where` argument doesn't exist, create a new Navigation with this data.
     */
    create: XOR<NavigationCreateInput, NavigationUncheckedCreateInput>
    /**
     * In case the Navigation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavigationUpdateInput, NavigationUncheckedUpdateInput>
  }

  /**
   * Navigation delete
   */
  export type NavigationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    /**
     * Filter which Navigation to delete.
     */
    where: NavigationWhereUniqueInput
  }

  /**
   * Navigation deleteMany
   */
  export type NavigationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Navigations to delete
     */
    where?: NavigationWhereInput
    /**
     * Limit how many Navigations to delete.
     */
    limit?: number
  }

  /**
   * Navigation.parent
   */
  export type Navigation$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    where?: NavigationWhereInput
  }

  /**
   * Navigation.children
   */
  export type Navigation$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
    where?: NavigationWhereInput
    orderBy?: NavigationOrderByWithRelationInput | NavigationOrderByWithRelationInput[]
    cursor?: NavigationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NavigationScalarFieldEnum | NavigationScalarFieldEnum[]
  }

  /**
   * Navigation without action
   */
  export type NavigationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Navigation
     */
    select?: NavigationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Navigation
     */
    omit?: NavigationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    pseudo: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    password: string | null
    role: $Enums.RoleEnum | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    pseudo: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    password: string | null
    role: $Enums.RoleEnum | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    pseudo: number
    email: number
    createdAt: number
    updatedAt: number
    isActive: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    pseudo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    pseudo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    pseudo?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string | null
    lastname: string | null
    pseudo: string | null
    email: string
    createdAt: Date
    updatedAt: Date | null
    isActive: boolean
    password: string
    role: $Enums.RoleEnum
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    pseudo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    pseudo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    pseudo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    pseudo?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "pseudo" | "email" | "createdAt" | "updatedAt" | "isActive" | "password" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string | null
      lastname: string | null
      pseudo: string | null
      email: string
      createdAt: Date
      updatedAt: Date | null
      isActive: boolean
      password: string
      role: $Enums.RoleEnum
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly pseudo: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleEnum'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ItemCategory
   */

  export type AggregateItemCategory = {
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  export type ItemCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemCategoryMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategory to aggregate.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCategories
    **/
    _count?: true | ItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type GetItemCategoryAggregateType<T extends ItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCategory[P]>
      : GetScalarType<T[P], AggregateItemCategory[P]>
  }




  export type ItemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryWhereInput
    orderBy?: ItemCategoryOrderByWithAggregationInput | ItemCategoryOrderByWithAggregationInput[]
    by: ItemCategoryScalarFieldEnum[] | ItemCategoryScalarFieldEnum
    having?: ItemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCategoryCountAggregateInputType | true
    _min?: ItemCategoryMinAggregateInputType
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type ItemCategoryGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  type GetItemCategoryGroupByPayload<T extends ItemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemType?: boolean | ItemCategory$itemTypeArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategory"]>

  export type ItemCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["itemCategory"]>

  export type ItemCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["itemCategory"]>

  export type ItemCategorySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["itemCategory"]>
  export type ItemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | ItemCategory$itemTypeArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCategory"
    objects: {
      itemType: Prisma.$ItemTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["itemCategory"]>
    composites: {}
  }

  type ItemCategoryGetPayload<S extends boolean | null | undefined | ItemCategoryDefaultArgs> = $Result.GetResult<Prisma.$ItemCategoryPayload, S>

  type ItemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCategoryCountAggregateInputType | true
    }

  export interface ItemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCategory'], meta: { name: 'ItemCategory' } }
    /**
     * Find zero or one ItemCategory that matches the filter.
     * @param {ItemCategoryFindUniqueArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCategoryFindUniqueArgs>(args: SelectSubset<T, ItemCategoryFindUniqueArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemCategoryFindUniqueOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCategoryFindFirstArgs>(args?: SelectSubset<T, ItemCategoryFindFirstArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany()
     * 
     * // Get first 10 ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCategoryFindManyArgs>(args?: SelectSubset<T, ItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemCategory.
     * @param {ItemCategoryCreateArgs} args - Arguments to create a ItemCategory.
     * @example
     * // Create one ItemCategory
     * const ItemCategory = await prisma.itemCategory.create({
     *   data: {
     *     // ... data to create a ItemCategory
     *   }
     * })
     * 
     */
    create<T extends ItemCategoryCreateArgs>(args: SelectSubset<T, ItemCategoryCreateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemCategories.
     * @param {ItemCategoryCreateManyArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCategoryCreateManyArgs>(args?: SelectSubset<T, ItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemCategories and returns the data saved in the database.
     * @param {ItemCategoryCreateManyAndReturnArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemCategories and only return the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemCategory.
     * @param {ItemCategoryDeleteArgs} args - Arguments to delete one ItemCategory.
     * @example
     * // Delete one ItemCategory
     * const ItemCategory = await prisma.itemCategory.delete({
     *   where: {
     *     // ... filter to delete one ItemCategory
     *   }
     * })
     * 
     */
    delete<T extends ItemCategoryDeleteArgs>(args: SelectSubset<T, ItemCategoryDeleteArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemCategory.
     * @param {ItemCategoryUpdateArgs} args - Arguments to update one ItemCategory.
     * @example
     * // Update one ItemCategory
     * const itemCategory = await prisma.itemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCategoryUpdateArgs>(args: SelectSubset<T, ItemCategoryUpdateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemCategories.
     * @param {ItemCategoryDeleteManyArgs} args - Arguments to filter ItemCategories to delete.
     * @example
     * // Delete a few ItemCategories
     * const { count } = await prisma.itemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCategoryDeleteManyArgs>(args?: SelectSubset<T, ItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCategories
     * const itemCategory = await prisma.itemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCategoryUpdateManyArgs>(args: SelectSubset<T, ItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategories and returns the data updated in the database.
     * @param {ItemCategoryUpdateManyAndReturnArgs} args - Arguments to update many ItemCategories.
     * @example
     * // Update many ItemCategories
     * const itemCategory = await prisma.itemCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemCategories and only return the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemCategory.
     * @param {ItemCategoryUpsertArgs} args - Arguments to update or create a ItemCategory.
     * @example
     * // Update or create a ItemCategory
     * const itemCategory = await prisma.itemCategory.upsert({
     *   create: {
     *     // ... data to create a ItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCategory we want to update
     *   }
     * })
     */
    upsert<T extends ItemCategoryUpsertArgs>(args: SelectSubset<T, ItemCategoryUpsertArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryCountArgs} args - Arguments to filter ItemCategories to count.
     * @example
     * // Count the number of ItemCategories
     * const count = await prisma.itemCategory.count({
     *   where: {
     *     // ... the filter for the ItemCategories we want to count
     *   }
     * })
    **/
    count<T extends ItemCategoryCountArgs>(
      args?: Subset<T, ItemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCategoryAggregateArgs>(args: Subset<T, ItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryAggregateType<T>>

    /**
     * Group by ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCategory model
   */
  readonly fields: ItemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemType<T extends ItemCategory$itemTypeArgs<ExtArgs> = {}>(args?: Subset<T, ItemCategory$itemTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCategory model
   */
  interface ItemCategoryFieldRefs {
    readonly id: FieldRef<"ItemCategory", 'String'>
    readonly name: FieldRef<"ItemCategory", 'String'>
    readonly isActive: FieldRef<"ItemCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ItemCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemCategory findUnique
   */
  export type ItemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findUniqueOrThrow
   */
  export type ItemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findFirst
   */
  export type ItemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findFirstOrThrow
   */
  export type ItemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findMany
   */
  export type ItemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategories to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory create
   */
  export type ItemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCategory.
     */
    data: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
  }

  /**
   * ItemCategory createMany
   */
  export type ItemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCategories.
     */
    data: ItemCategoryCreateManyInput | ItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCategory createManyAndReturn
   */
  export type ItemCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ItemCategories.
     */
    data: ItemCategoryCreateManyInput | ItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCategory update
   */
  export type ItemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCategory.
     */
    data: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
    /**
     * Choose, which ItemCategory to update.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory updateMany
   */
  export type ItemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCategories.
     */
    data: XOR<ItemCategoryUpdateManyMutationInput, ItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemCategories to update
     */
    where?: ItemCategoryWhereInput
    /**
     * Limit how many ItemCategories to update.
     */
    limit?: number
  }

  /**
   * ItemCategory updateManyAndReturn
   */
  export type ItemCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ItemCategories.
     */
    data: XOR<ItemCategoryUpdateManyMutationInput, ItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemCategories to update
     */
    where?: ItemCategoryWhereInput
    /**
     * Limit how many ItemCategories to update.
     */
    limit?: number
  }

  /**
   * ItemCategory upsert
   */
  export type ItemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCategory to update in case it exists.
     */
    where: ItemCategoryWhereUniqueInput
    /**
     * In case the ItemCategory found by the `where` argument doesn't exist, create a new ItemCategory with this data.
     */
    create: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
    /**
     * In case the ItemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
  }

  /**
   * ItemCategory delete
   */
  export type ItemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter which ItemCategory to delete.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory deleteMany
   */
  export type ItemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategories to delete
     */
    where?: ItemCategoryWhereInput
    /**
     * Limit how many ItemCategories to delete.
     */
    limit?: number
  }

  /**
   * ItemCategory.itemType
   */
  export type ItemCategory$itemTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    where?: ItemTypeWhereInput
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    cursor?: ItemTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }

  /**
   * ItemCategory without action
   */
  export type ItemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemCategory
     */
    omit?: ItemCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ItemType
   */

  export type AggregateItemType = {
    _count: ItemTypeCountAggregateOutputType | null
    _min: ItemTypeMinAggregateOutputType | null
    _max: ItemTypeMaxAggregateOutputType | null
  }

  export type ItemTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    isStackable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    itemCategoryId: string | null
  }

  export type ItemTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    isStackable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    itemCategoryId: string | null
  }

  export type ItemTypeCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    isStackable: number
    createdAt: number
    updatedAt: number
    itemCategoryId: number
    _all: number
  }


  export type ItemTypeMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isStackable?: true
    createdAt?: true
    updatedAt?: true
    itemCategoryId?: true
  }

  export type ItemTypeMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isStackable?: true
    createdAt?: true
    updatedAt?: true
    itemCategoryId?: true
  }

  export type ItemTypeCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    isStackable?: true
    createdAt?: true
    updatedAt?: true
    itemCategoryId?: true
    _all?: true
  }

  export type ItemTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemType to aggregate.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemTypes
    **/
    _count?: true | ItemTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemTypeMaxAggregateInputType
  }

  export type GetItemTypeAggregateType<T extends ItemTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateItemType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemType[P]>
      : GetScalarType<T[P], AggregateItemType[P]>
  }




  export type ItemTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTypeWhereInput
    orderBy?: ItemTypeOrderByWithAggregationInput | ItemTypeOrderByWithAggregationInput[]
    by: ItemTypeScalarFieldEnum[] | ItemTypeScalarFieldEnum
    having?: ItemTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemTypeCountAggregateInputType | true
    _min?: ItemTypeMinAggregateInputType
    _max?: ItemTypeMaxAggregateInputType
  }

  export type ItemTypeGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    isStackable: boolean
    createdAt: Date
    updatedAt: Date | null
    itemCategoryId: string
    _count: ItemTypeCountAggregateOutputType | null
    _min: ItemTypeMinAggregateOutputType | null
    _max: ItemTypeMaxAggregateOutputType | null
  }

  type GetItemTypeGroupByPayload<T extends ItemTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ItemTypeGroupByOutputType[P]>
        }
      >
    >


  export type ItemTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isStackable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemCategoryId?: boolean
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
    items?: boolean | ItemType$itemsArgs<ExtArgs>
    _count?: boolean | ItemTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemType"]>

  export type ItemTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isStackable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemCategoryId?: boolean
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemType"]>

  export type ItemTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    isStackable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemCategoryId?: boolean
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemType"]>

  export type ItemTypeSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    isStackable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemCategoryId?: boolean
  }

  export type ItemTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "isStackable" | "createdAt" | "updatedAt" | "itemCategoryId", ExtArgs["result"]["itemType"]>
  export type ItemTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
    items?: boolean | ItemType$itemsArgs<ExtArgs>
    _count?: boolean | ItemTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }
  export type ItemTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemCategory?: boolean | ItemCategoryDefaultArgs<ExtArgs>
  }

  export type $ItemTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemType"
    objects: {
      itemCategory: Prisma.$ItemCategoryPayload<ExtArgs>
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      isStackable: boolean
      createdAt: Date
      updatedAt: Date | null
      itemCategoryId: string
    }, ExtArgs["result"]["itemType"]>
    composites: {}
  }

  type ItemTypeGetPayload<S extends boolean | null | undefined | ItemTypeDefaultArgs> = $Result.GetResult<Prisma.$ItemTypePayload, S>

  type ItemTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemTypeCountAggregateInputType | true
    }

  export interface ItemTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemType'], meta: { name: 'ItemType' } }
    /**
     * Find zero or one ItemType that matches the filter.
     * @param {ItemTypeFindUniqueArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemTypeFindUniqueArgs>(args: SelectSubset<T, ItemTypeFindUniqueArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemTypeFindUniqueOrThrowArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindFirstArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemTypeFindFirstArgs>(args?: SelectSubset<T, ItemTypeFindFirstArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindFirstOrThrowArgs} args - Arguments to find a ItemType
     * @example
     * // Get one ItemType
     * const itemType = await prisma.itemType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemTypes
     * const itemTypes = await prisma.itemType.findMany()
     * 
     * // Get first 10 ItemTypes
     * const itemTypes = await prisma.itemType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemTypeWithIdOnly = await prisma.itemType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemTypeFindManyArgs>(args?: SelectSubset<T, ItemTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemType.
     * @param {ItemTypeCreateArgs} args - Arguments to create a ItemType.
     * @example
     * // Create one ItemType
     * const ItemType = await prisma.itemType.create({
     *   data: {
     *     // ... data to create a ItemType
     *   }
     * })
     * 
     */
    create<T extends ItemTypeCreateArgs>(args: SelectSubset<T, ItemTypeCreateArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemTypes.
     * @param {ItemTypeCreateManyArgs} args - Arguments to create many ItemTypes.
     * @example
     * // Create many ItemTypes
     * const itemType = await prisma.itemType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemTypeCreateManyArgs>(args?: SelectSubset<T, ItemTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemTypes and returns the data saved in the database.
     * @param {ItemTypeCreateManyAndReturnArgs} args - Arguments to create many ItemTypes.
     * @example
     * // Create many ItemTypes
     * const itemType = await prisma.itemType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemTypes and only return the `id`
     * const itemTypeWithIdOnly = await prisma.itemType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemType.
     * @param {ItemTypeDeleteArgs} args - Arguments to delete one ItemType.
     * @example
     * // Delete one ItemType
     * const ItemType = await prisma.itemType.delete({
     *   where: {
     *     // ... filter to delete one ItemType
     *   }
     * })
     * 
     */
    delete<T extends ItemTypeDeleteArgs>(args: SelectSubset<T, ItemTypeDeleteArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemType.
     * @param {ItemTypeUpdateArgs} args - Arguments to update one ItemType.
     * @example
     * // Update one ItemType
     * const itemType = await prisma.itemType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemTypeUpdateArgs>(args: SelectSubset<T, ItemTypeUpdateArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemTypes.
     * @param {ItemTypeDeleteManyArgs} args - Arguments to filter ItemTypes to delete.
     * @example
     * // Delete a few ItemTypes
     * const { count } = await prisma.itemType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemTypeDeleteManyArgs>(args?: SelectSubset<T, ItemTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemTypes
     * const itemType = await prisma.itemType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemTypeUpdateManyArgs>(args: SelectSubset<T, ItemTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemTypes and returns the data updated in the database.
     * @param {ItemTypeUpdateManyAndReturnArgs} args - Arguments to update many ItemTypes.
     * @example
     * // Update many ItemTypes
     * const itemType = await prisma.itemType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemTypes and only return the `id`
     * const itemTypeWithIdOnly = await prisma.itemType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemType.
     * @param {ItemTypeUpsertArgs} args - Arguments to update or create a ItemType.
     * @example
     * // Update or create a ItemType
     * const itemType = await prisma.itemType.upsert({
     *   create: {
     *     // ... data to create a ItemType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemType we want to update
     *   }
     * })
     */
    upsert<T extends ItemTypeUpsertArgs>(args: SelectSubset<T, ItemTypeUpsertArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeCountArgs} args - Arguments to filter ItemTypes to count.
     * @example
     * // Count the number of ItemTypes
     * const count = await prisma.itemType.count({
     *   where: {
     *     // ... the filter for the ItemTypes we want to count
     *   }
     * })
    **/
    count<T extends ItemTypeCountArgs>(
      args?: Subset<T, ItemTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemTypeAggregateArgs>(args: Subset<T, ItemTypeAggregateArgs>): Prisma.PrismaPromise<GetItemTypeAggregateType<T>>

    /**
     * Group by ItemType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemTypeGroupByArgs['orderBy'] }
        : { orderBy?: ItemTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemType model
   */
  readonly fields: ItemTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemCategory<T extends ItemCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemCategoryDefaultArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ItemType$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ItemType$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemType model
   */
  interface ItemTypeFieldRefs {
    readonly id: FieldRef<"ItemType", 'String'>
    readonly name: FieldRef<"ItemType", 'String'>
    readonly isActive: FieldRef<"ItemType", 'Boolean'>
    readonly isStackable: FieldRef<"ItemType", 'Boolean'>
    readonly createdAt: FieldRef<"ItemType", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemType", 'DateTime'>
    readonly itemCategoryId: FieldRef<"ItemType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemType findUnique
   */
  export type ItemTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where: ItemTypeWhereUniqueInput
  }

  /**
   * ItemType findUniqueOrThrow
   */
  export type ItemTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where: ItemTypeWhereUniqueInput
  }

  /**
   * ItemType findFirst
   */
  export type ItemTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTypes.
     */
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }

  /**
   * ItemType findFirstOrThrow
   */
  export type ItemTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemType to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTypes.
     */
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }

  /**
   * ItemType findMany
   */
  export type ItemTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter, which ItemTypes to fetch.
     */
    where?: ItemTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTypes to fetch.
     */
    orderBy?: ItemTypeOrderByWithRelationInput | ItemTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemTypes.
     */
    cursor?: ItemTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTypes.
     */
    skip?: number
    distinct?: ItemTypeScalarFieldEnum | ItemTypeScalarFieldEnum[]
  }

  /**
   * ItemType create
   */
  export type ItemTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemType.
     */
    data: XOR<ItemTypeCreateInput, ItemTypeUncheckedCreateInput>
  }

  /**
   * ItemType createMany
   */
  export type ItemTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemTypes.
     */
    data: ItemTypeCreateManyInput | ItemTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemType createManyAndReturn
   */
  export type ItemTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ItemTypes.
     */
    data: ItemTypeCreateManyInput | ItemTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemType update
   */
  export type ItemTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemType.
     */
    data: XOR<ItemTypeUpdateInput, ItemTypeUncheckedUpdateInput>
    /**
     * Choose, which ItemType to update.
     */
    where: ItemTypeWhereUniqueInput
  }

  /**
   * ItemType updateMany
   */
  export type ItemTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemTypes.
     */
    data: XOR<ItemTypeUpdateManyMutationInput, ItemTypeUncheckedUpdateManyInput>
    /**
     * Filter which ItemTypes to update
     */
    where?: ItemTypeWhereInput
    /**
     * Limit how many ItemTypes to update.
     */
    limit?: number
  }

  /**
   * ItemType updateManyAndReturn
   */
  export type ItemTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * The data used to update ItemTypes.
     */
    data: XOR<ItemTypeUpdateManyMutationInput, ItemTypeUncheckedUpdateManyInput>
    /**
     * Filter which ItemTypes to update
     */
    where?: ItemTypeWhereInput
    /**
     * Limit how many ItemTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemType upsert
   */
  export type ItemTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemType to update in case it exists.
     */
    where: ItemTypeWhereUniqueInput
    /**
     * In case the ItemType found by the `where` argument doesn't exist, create a new ItemType with this data.
     */
    create: XOR<ItemTypeCreateInput, ItemTypeUncheckedCreateInput>
    /**
     * In case the ItemType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemTypeUpdateInput, ItemTypeUncheckedUpdateInput>
  }

  /**
   * ItemType delete
   */
  export type ItemTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
    /**
     * Filter which ItemType to delete.
     */
    where: ItemTypeWhereUniqueInput
  }

  /**
   * ItemType deleteMany
   */
  export type ItemTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemTypes to delete
     */
    where?: ItemTypeWhereInput
    /**
     * Limit how many ItemTypes to delete.
     */
    limit?: number
  }

  /**
   * ItemType.items
   */
  export type ItemType$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * ItemType without action
   */
  export type ItemTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemType
     */
    select?: ItemTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemType
     */
    omit?: ItemTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTypeInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    value: number | null
  }

  export type ItemSumAggregateOutputType = {
    value: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    imageUrlId: string | null
    isActive: boolean | null
    isLimied: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    itemTypeId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    imageUrlId: string | null
    isActive: boolean | null
    isLimied: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    itemTypeId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    value: number
    imageUrlId: number
    isActive: number
    isLimied: number
    createdAt: number
    updatedAt: number
    itemTypeId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    value?: true
  }

  export type ItemSumAggregateInputType = {
    value?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    imageUrlId?: true
    isActive?: true
    isLimied?: true
    createdAt?: true
    updatedAt?: true
    itemTypeId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    imageUrlId?: true
    isActive?: true
    isLimied?: true
    createdAt?: true
    updatedAt?: true
    itemTypeId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    imageUrlId?: true
    isActive?: true
    isLimied?: true
    createdAt?: true
    updatedAt?: true
    itemTypeId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    value: number
    imageUrlId: string | null
    isActive: boolean
    isLimied: boolean
    createdAt: Date
    updatedAt: Date | null
    itemTypeId: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    imageUrlId?: boolean
    isActive?: boolean
    isLimied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemTypeId?: boolean
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    imageUrlId?: boolean
    isActive?: boolean
    isLimied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemTypeId?: boolean
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    imageUrlId?: boolean
    isActive?: boolean
    isLimied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemTypeId?: boolean
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    imageUrlId?: boolean
    isActive?: boolean
    isLimied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemTypeId?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "imageUrlId" | "isActive" | "isLimied" | "createdAt" | "updatedAt" | "itemTypeId", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemType?: boolean | ItemTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      itemType: Prisma.$ItemTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: number
      imageUrlId: string | null
      isActive: boolean
      isLimied: boolean
      createdAt: Date
      updatedAt: Date | null
      itemTypeId: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemType<T extends ItemTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemTypeDefaultArgs<ExtArgs>>): Prisma__ItemTypeClient<$Result.GetResult<Prisma.$ItemTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly value: FieldRef<"Item", 'Float'>
    readonly imageUrlId: FieldRef<"Item", 'String'>
    readonly isActive: FieldRef<"Item", 'Boolean'>
    readonly isLimied: FieldRef<"Item", 'Boolean'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
    readonly itemTypeId: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NavigationScalarFieldEnum: {
    id: 'id',
    label: 'label',
    url: 'url',
    isActive: 'isActive',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    order: 'order'
  };

  export type NavigationScalarFieldEnum = (typeof NavigationScalarFieldEnum)[keyof typeof NavigationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    pseudo: 'pseudo',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemCategoryScalarFieldEnum = (typeof ItemCategoryScalarFieldEnum)[keyof typeof ItemCategoryScalarFieldEnum]


  export const ItemTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    isStackable: 'isStackable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    itemCategoryId: 'itemCategoryId'
  };

  export type ItemTypeScalarFieldEnum = (typeof ItemTypeScalarFieldEnum)[keyof typeof ItemTypeScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    imageUrlId: 'imageUrlId',
    isActive: 'isActive',
    isLimied: 'isLimied',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    itemTypeId: 'itemTypeId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RoleEnum'
   */
  export type EnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum'>
    


  /**
   * Reference to a field of type 'RoleEnum[]'
   */
  export type ListEnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NavigationWhereInput = {
    AND?: NavigationWhereInput | NavigationWhereInput[]
    OR?: NavigationWhereInput[]
    NOT?: NavigationWhereInput | NavigationWhereInput[]
    id?: StringFilter<"Navigation"> | string
    label?: StringFilter<"Navigation"> | string
    url?: StringNullableFilter<"Navigation"> | string | null
    isActive?: BoolFilter<"Navigation"> | boolean
    parentId?: StringNullableFilter<"Navigation"> | string | null
    createdAt?: DateTimeFilter<"Navigation"> | Date | string
    updatedAt?: DateTimeFilter<"Navigation"> | Date | string
    order?: IntFilter<"Navigation"> | number
    parent?: XOR<NavigationNullableScalarRelationFilter, NavigationWhereInput> | null
    children?: NavigationListRelationFilter
  }

  export type NavigationOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrderInput | SortOrder
    isActive?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    parent?: NavigationOrderByWithRelationInput
    children?: NavigationOrderByRelationAggregateInput
  }

  export type NavigationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    label?: string
    AND?: NavigationWhereInput | NavigationWhereInput[]
    OR?: NavigationWhereInput[]
    NOT?: NavigationWhereInput | NavigationWhereInput[]
    url?: StringNullableFilter<"Navigation"> | string | null
    isActive?: BoolFilter<"Navigation"> | boolean
    parentId?: StringNullableFilter<"Navigation"> | string | null
    createdAt?: DateTimeFilter<"Navigation"> | Date | string
    updatedAt?: DateTimeFilter<"Navigation"> | Date | string
    order?: IntFilter<"Navigation"> | number
    parent?: XOR<NavigationNullableScalarRelationFilter, NavigationWhereInput> | null
    children?: NavigationListRelationFilter
  }, "id" | "label">

  export type NavigationOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrderInput | SortOrder
    isActive?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    _count?: NavigationCountOrderByAggregateInput
    _avg?: NavigationAvgOrderByAggregateInput
    _max?: NavigationMaxOrderByAggregateInput
    _min?: NavigationMinOrderByAggregateInput
    _sum?: NavigationSumOrderByAggregateInput
  }

  export type NavigationScalarWhereWithAggregatesInput = {
    AND?: NavigationScalarWhereWithAggregatesInput | NavigationScalarWhereWithAggregatesInput[]
    OR?: NavigationScalarWhereWithAggregatesInput[]
    NOT?: NavigationScalarWhereWithAggregatesInput | NavigationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Navigation"> | string
    label?: StringWithAggregatesFilter<"Navigation"> | string
    url?: StringNullableWithAggregatesFilter<"Navigation"> | string | null
    isActive?: BoolWithAggregatesFilter<"Navigation"> | boolean
    parentId?: StringNullableWithAggregatesFilter<"Navigation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Navigation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Navigation"> | Date | string
    order?: IntWithAggregatesFilter<"Navigation"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    pseudo?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    role?: EnumRoleEnumFilter<"User"> | $Enums.RoleEnum
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    pseudo?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    pseudo?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    role?: EnumRoleEnumFilter<"User"> | $Enums.RoleEnum
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    pseudo?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    pseudo?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleEnumWithAggregatesFilter<"User"> | $Enums.RoleEnum
  }

  export type ItemCategoryWhereInput = {
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    id?: StringFilter<"ItemCategory"> | string
    name?: StringFilter<"ItemCategory"> | string
    isActive?: BoolFilter<"ItemCategory"> | boolean
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ItemCategory"> | Date | string | null
    itemType?: ItemTypeListRelationFilter
  }

  export type ItemCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    itemType?: ItemTypeOrderByRelationAggregateInput
  }

  export type ItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    isActive?: BoolFilter<"ItemCategory"> | boolean
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ItemCategory"> | Date | string | null
    itemType?: ItemTypeListRelationFilter
  }, "id" | "name">

  export type ItemCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ItemCategoryCountOrderByAggregateInput
    _max?: ItemCategoryMaxOrderByAggregateInput
    _min?: ItemCategoryMinOrderByAggregateInput
  }

  export type ItemCategoryScalarWhereWithAggregatesInput = {
    AND?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    OR?: ItemCategoryScalarWhereWithAggregatesInput[]
    NOT?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemCategory"> | string
    name?: StringWithAggregatesFilter<"ItemCategory"> | string
    isActive?: BoolWithAggregatesFilter<"ItemCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ItemCategory"> | Date | string | null
  }

  export type ItemTypeWhereInput = {
    AND?: ItemTypeWhereInput | ItemTypeWhereInput[]
    OR?: ItemTypeWhereInput[]
    NOT?: ItemTypeWhereInput | ItemTypeWhereInput[]
    id?: StringFilter<"ItemType"> | string
    name?: StringFilter<"ItemType"> | string
    isActive?: BoolFilter<"ItemType"> | boolean
    isStackable?: BoolFilter<"ItemType"> | boolean
    createdAt?: DateTimeFilter<"ItemType"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ItemType"> | Date | string | null
    itemCategoryId?: StringFilter<"ItemType"> | string
    itemCategory?: XOR<ItemCategoryScalarRelationFilter, ItemCategoryWhereInput>
    items?: ItemListRelationFilter
  }

  export type ItemTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isStackable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    itemCategoryId?: SortOrder
    itemCategory?: ItemCategoryOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type ItemTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ItemTypeWhereInput | ItemTypeWhereInput[]
    OR?: ItemTypeWhereInput[]
    NOT?: ItemTypeWhereInput | ItemTypeWhereInput[]
    isActive?: BoolFilter<"ItemType"> | boolean
    isStackable?: BoolFilter<"ItemType"> | boolean
    createdAt?: DateTimeFilter<"ItemType"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ItemType"> | Date | string | null
    itemCategoryId?: StringFilter<"ItemType"> | string
    itemCategory?: XOR<ItemCategoryScalarRelationFilter, ItemCategoryWhereInput>
    items?: ItemListRelationFilter
  }, "id" | "name">

  export type ItemTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isStackable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    itemCategoryId?: SortOrder
    _count?: ItemTypeCountOrderByAggregateInput
    _max?: ItemTypeMaxOrderByAggregateInput
    _min?: ItemTypeMinOrderByAggregateInput
  }

  export type ItemTypeScalarWhereWithAggregatesInput = {
    AND?: ItemTypeScalarWhereWithAggregatesInput | ItemTypeScalarWhereWithAggregatesInput[]
    OR?: ItemTypeScalarWhereWithAggregatesInput[]
    NOT?: ItemTypeScalarWhereWithAggregatesInput | ItemTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemType"> | string
    name?: StringWithAggregatesFilter<"ItemType"> | string
    isActive?: BoolWithAggregatesFilter<"ItemType"> | boolean
    isStackable?: BoolWithAggregatesFilter<"ItemType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ItemType"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ItemType"> | Date | string | null
    itemCategoryId?: StringWithAggregatesFilter<"ItemType"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    value?: FloatFilter<"Item"> | number
    imageUrlId?: StringNullableFilter<"Item"> | string | null
    isActive?: BoolFilter<"Item"> | boolean
    isLimied?: BoolFilter<"Item"> | boolean
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    itemTypeId?: StringFilter<"Item"> | string
    itemType?: XOR<ItemTypeScalarRelationFilter, ItemTypeWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    imageUrlId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isLimied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    itemTypeId?: SortOrder
    itemType?: ItemTypeOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    value?: FloatFilter<"Item"> | number
    imageUrlId?: StringNullableFilter<"Item"> | string | null
    isActive?: BoolFilter<"Item"> | boolean
    isLimied?: BoolFilter<"Item"> | boolean
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    itemTypeId?: StringFilter<"Item"> | string
    itemType?: XOR<ItemTypeScalarRelationFilter, ItemTypeWhereInput>
  }, "id" | "name">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    imageUrlId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isLimied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    itemTypeId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    value?: FloatWithAggregatesFilter<"Item"> | number
    imageUrlId?: StringNullableWithAggregatesFilter<"Item"> | string | null
    isActive?: BoolWithAggregatesFilter<"Item"> | boolean
    isLimied?: BoolWithAggregatesFilter<"Item"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    itemTypeId?: StringWithAggregatesFilter<"Item"> | string
  }

  export type NavigationCreateInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
    parent?: NavigationCreateNestedOneWithoutChildrenInput
    children?: NavigationCreateNestedManyWithoutParentInput
  }

  export type NavigationUncheckedCreateInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
    children?: NavigationUncheckedCreateNestedManyWithoutParentInput
  }

  export type NavigationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    parent?: NavigationUpdateOneWithoutChildrenNestedInput
    children?: NavigationUpdateManyWithoutParentNestedInput
  }

  export type NavigationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    children?: NavigationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NavigationCreateManyInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
  }

  export type NavigationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NavigationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    pseudo?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    password: string
    role?: $Enums.RoleEnum
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    pseudo?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    password: string
    role?: $Enums.RoleEnum
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
  }

  export type UserCreateManyInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    pseudo?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    isActive?: boolean
    password: string
    role?: $Enums.RoleEnum
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
  }

  export type ItemCategoryCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemType?: ItemTypeCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemType?: ItemTypeUncheckedCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemType?: ItemTypeUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemType?: ItemTypeUncheckedUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemTypeCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemCategory: ItemCategoryCreateNestedOneWithoutItemTypeInput
    items?: ItemCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemCategoryId: string
    items?: ItemUncheckedCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemCategory?: ItemCategoryUpdateOneRequiredWithoutItemTypeNestedInput
    items?: ItemUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemCategoryId?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemCategoryId: string
  }

  export type ItemTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemType: ItemTypeCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemTypeId: string
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemType?: ItemTypeUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemTypeId: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NavigationNullableScalarRelationFilter = {
    is?: NavigationWhereInput | null
    isNot?: NavigationWhereInput | null
  }

  export type NavigationListRelationFilter = {
    every?: NavigationWhereInput
    some?: NavigationWhereInput
    none?: NavigationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NavigationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NavigationCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
  }

  export type NavigationAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type NavigationMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
  }

  export type NavigationMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
  }

  export type NavigationSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    pseudo?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }

  export type ItemTypeListRelationFilter = {
    every?: ItemTypeWhereInput
    some?: ItemTypeWhereInput
    none?: ItemTypeWhereInput
  }

  export type ItemTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryScalarRelationFilter = {
    is?: ItemCategoryWhereInput
    isNot?: ItemCategoryWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isStackable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemCategoryId?: SortOrder
  }

  export type ItemTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isStackable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemCategoryId?: SortOrder
  }

  export type ItemTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    isStackable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemCategoryId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemTypeScalarRelationFilter = {
    is?: ItemTypeWhereInput
    isNot?: ItemTypeWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    imageUrlId?: SortOrder
    isActive?: SortOrder
    isLimied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemTypeId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    imageUrlId?: SortOrder
    isActive?: SortOrder
    isLimied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemTypeId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    imageUrlId?: SortOrder
    isActive?: SortOrder
    isLimied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemTypeId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NavigationCreateNestedOneWithoutChildrenInput = {
    create?: XOR<NavigationCreateWithoutChildrenInput, NavigationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NavigationCreateOrConnectWithoutChildrenInput
    connect?: NavigationWhereUniqueInput
  }

  export type NavigationCreateNestedManyWithoutParentInput = {
    create?: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput> | NavigationCreateWithoutParentInput[] | NavigationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationCreateOrConnectWithoutParentInput | NavigationCreateOrConnectWithoutParentInput[]
    createMany?: NavigationCreateManyParentInputEnvelope
    connect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
  }

  export type NavigationUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput> | NavigationCreateWithoutParentInput[] | NavigationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationCreateOrConnectWithoutParentInput | NavigationCreateOrConnectWithoutParentInput[]
    createMany?: NavigationCreateManyParentInputEnvelope
    connect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NavigationUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<NavigationCreateWithoutChildrenInput, NavigationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NavigationCreateOrConnectWithoutChildrenInput
    upsert?: NavigationUpsertWithoutChildrenInput
    disconnect?: NavigationWhereInput | boolean
    delete?: NavigationWhereInput | boolean
    connect?: NavigationWhereUniqueInput
    update?: XOR<XOR<NavigationUpdateToOneWithWhereWithoutChildrenInput, NavigationUpdateWithoutChildrenInput>, NavigationUncheckedUpdateWithoutChildrenInput>
  }

  export type NavigationUpdateManyWithoutParentNestedInput = {
    create?: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput> | NavigationCreateWithoutParentInput[] | NavigationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationCreateOrConnectWithoutParentInput | NavigationCreateOrConnectWithoutParentInput[]
    upsert?: NavigationUpsertWithWhereUniqueWithoutParentInput | NavigationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NavigationCreateManyParentInputEnvelope
    set?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    disconnect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    delete?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    connect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    update?: NavigationUpdateWithWhereUniqueWithoutParentInput | NavigationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NavigationUpdateManyWithWhereWithoutParentInput | NavigationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NavigationScalarWhereInput | NavigationScalarWhereInput[]
  }

  export type NavigationUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput> | NavigationCreateWithoutParentInput[] | NavigationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NavigationCreateOrConnectWithoutParentInput | NavigationCreateOrConnectWithoutParentInput[]
    upsert?: NavigationUpsertWithWhereUniqueWithoutParentInput | NavigationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NavigationCreateManyParentInputEnvelope
    set?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    disconnect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    delete?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    connect?: NavigationWhereUniqueInput | NavigationWhereUniqueInput[]
    update?: NavigationUpdateWithWhereUniqueWithoutParentInput | NavigationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NavigationUpdateManyWithWhereWithoutParentInput | NavigationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NavigationScalarWhereInput | NavigationScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.RoleEnum
  }

  export type ItemTypeCreateNestedManyWithoutItemCategoryInput = {
    create?: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput> | ItemTypeCreateWithoutItemCategoryInput[] | ItemTypeUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemCategoryInput | ItemTypeCreateOrConnectWithoutItemCategoryInput[]
    createMany?: ItemTypeCreateManyItemCategoryInputEnvelope
    connect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
  }

  export type ItemTypeUncheckedCreateNestedManyWithoutItemCategoryInput = {
    create?: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput> | ItemTypeCreateWithoutItemCategoryInput[] | ItemTypeUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemCategoryInput | ItemTypeCreateOrConnectWithoutItemCategoryInput[]
    createMany?: ItemTypeCreateManyItemCategoryInputEnvelope
    connect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
  }

  export type ItemTypeUpdateManyWithoutItemCategoryNestedInput = {
    create?: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput> | ItemTypeCreateWithoutItemCategoryInput[] | ItemTypeUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemCategoryInput | ItemTypeCreateOrConnectWithoutItemCategoryInput[]
    upsert?: ItemTypeUpsertWithWhereUniqueWithoutItemCategoryInput | ItemTypeUpsertWithWhereUniqueWithoutItemCategoryInput[]
    createMany?: ItemTypeCreateManyItemCategoryInputEnvelope
    set?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    disconnect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    delete?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    connect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    update?: ItemTypeUpdateWithWhereUniqueWithoutItemCategoryInput | ItemTypeUpdateWithWhereUniqueWithoutItemCategoryInput[]
    updateMany?: ItemTypeUpdateManyWithWhereWithoutItemCategoryInput | ItemTypeUpdateManyWithWhereWithoutItemCategoryInput[]
    deleteMany?: ItemTypeScalarWhereInput | ItemTypeScalarWhereInput[]
  }

  export type ItemTypeUncheckedUpdateManyWithoutItemCategoryNestedInput = {
    create?: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput> | ItemTypeCreateWithoutItemCategoryInput[] | ItemTypeUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemCategoryInput | ItemTypeCreateOrConnectWithoutItemCategoryInput[]
    upsert?: ItemTypeUpsertWithWhereUniqueWithoutItemCategoryInput | ItemTypeUpsertWithWhereUniqueWithoutItemCategoryInput[]
    createMany?: ItemTypeCreateManyItemCategoryInputEnvelope
    set?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    disconnect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    delete?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    connect?: ItemTypeWhereUniqueInput | ItemTypeWhereUniqueInput[]
    update?: ItemTypeUpdateWithWhereUniqueWithoutItemCategoryInput | ItemTypeUpdateWithWhereUniqueWithoutItemCategoryInput[]
    updateMany?: ItemTypeUpdateManyWithWhereWithoutItemCategoryInput | ItemTypeUpdateManyWithWhereWithoutItemCategoryInput[]
    deleteMany?: ItemTypeScalarWhereInput | ItemTypeScalarWhereInput[]
  }

  export type ItemCategoryCreateNestedOneWithoutItemTypeInput = {
    create?: XOR<ItemCategoryCreateWithoutItemTypeInput, ItemCategoryUncheckedCreateWithoutItemTypeInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemTypeInput
    connect?: ItemCategoryWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutItemTypeInput = {
    create?: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput> | ItemCreateWithoutItemTypeInput[] | ItemUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemTypeInput | ItemCreateOrConnectWithoutItemTypeInput[]
    createMany?: ItemCreateManyItemTypeInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutItemTypeInput = {
    create?: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput> | ItemCreateWithoutItemTypeInput[] | ItemUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemTypeInput | ItemCreateOrConnectWithoutItemTypeInput[]
    createMany?: ItemCreateManyItemTypeInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemCategoryUpdateOneRequiredWithoutItemTypeNestedInput = {
    create?: XOR<ItemCategoryCreateWithoutItemTypeInput, ItemCategoryUncheckedCreateWithoutItemTypeInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemTypeInput
    upsert?: ItemCategoryUpsertWithoutItemTypeInput
    connect?: ItemCategoryWhereUniqueInput
    update?: XOR<XOR<ItemCategoryUpdateToOneWithWhereWithoutItemTypeInput, ItemCategoryUpdateWithoutItemTypeInput>, ItemCategoryUncheckedUpdateWithoutItemTypeInput>
  }

  export type ItemUpdateManyWithoutItemTypeNestedInput = {
    create?: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput> | ItemCreateWithoutItemTypeInput[] | ItemUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemTypeInput | ItemCreateOrConnectWithoutItemTypeInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutItemTypeInput | ItemUpsertWithWhereUniqueWithoutItemTypeInput[]
    createMany?: ItemCreateManyItemTypeInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutItemTypeInput | ItemUpdateWithWhereUniqueWithoutItemTypeInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutItemTypeInput | ItemUpdateManyWithWhereWithoutItemTypeInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutItemTypeNestedInput = {
    create?: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput> | ItemCreateWithoutItemTypeInput[] | ItemUncheckedCreateWithoutItemTypeInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemTypeInput | ItemCreateOrConnectWithoutItemTypeInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutItemTypeInput | ItemUpsertWithWhereUniqueWithoutItemTypeInput[]
    createMany?: ItemCreateManyItemTypeInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutItemTypeInput | ItemUpdateWithWhereUniqueWithoutItemTypeInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutItemTypeInput | ItemUpdateManyWithWhereWithoutItemTypeInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemTypeCreateNestedOneWithoutItemsInput = {
    create?: XOR<ItemTypeCreateWithoutItemsInput, ItemTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemsInput
    connect?: ItemTypeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemTypeUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ItemTypeCreateWithoutItemsInput, ItemTypeUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ItemTypeCreateOrConnectWithoutItemsInput
    upsert?: ItemTypeUpsertWithoutItemsInput
    connect?: ItemTypeWhereUniqueInput
    update?: XOR<XOR<ItemTypeUpdateToOneWithWhereWithoutItemsInput, ItemTypeUpdateWithoutItemsInput>, ItemTypeUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NavigationCreateWithoutChildrenInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
    parent?: NavigationCreateNestedOneWithoutChildrenInput
  }

  export type NavigationUncheckedCreateWithoutChildrenInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
  }

  export type NavigationCreateOrConnectWithoutChildrenInput = {
    where: NavigationWhereUniqueInput
    create: XOR<NavigationCreateWithoutChildrenInput, NavigationUncheckedCreateWithoutChildrenInput>
  }

  export type NavigationCreateWithoutParentInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
    children?: NavigationCreateNestedManyWithoutParentInput
  }

  export type NavigationUncheckedCreateWithoutParentInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
    children?: NavigationUncheckedCreateNestedManyWithoutParentInput
  }

  export type NavigationCreateOrConnectWithoutParentInput = {
    where: NavigationWhereUniqueInput
    create: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput>
  }

  export type NavigationCreateManyParentInputEnvelope = {
    data: NavigationCreateManyParentInput | NavigationCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type NavigationUpsertWithoutChildrenInput = {
    update: XOR<NavigationUpdateWithoutChildrenInput, NavigationUncheckedUpdateWithoutChildrenInput>
    create: XOR<NavigationCreateWithoutChildrenInput, NavigationUncheckedCreateWithoutChildrenInput>
    where?: NavigationWhereInput
  }

  export type NavigationUpdateToOneWithWhereWithoutChildrenInput = {
    where?: NavigationWhereInput
    data: XOR<NavigationUpdateWithoutChildrenInput, NavigationUncheckedUpdateWithoutChildrenInput>
  }

  export type NavigationUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    parent?: NavigationUpdateOneWithoutChildrenNestedInput
  }

  export type NavigationUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NavigationUpsertWithWhereUniqueWithoutParentInput = {
    where: NavigationWhereUniqueInput
    update: XOR<NavigationUpdateWithoutParentInput, NavigationUncheckedUpdateWithoutParentInput>
    create: XOR<NavigationCreateWithoutParentInput, NavigationUncheckedCreateWithoutParentInput>
  }

  export type NavigationUpdateWithWhereUniqueWithoutParentInput = {
    where: NavigationWhereUniqueInput
    data: XOR<NavigationUpdateWithoutParentInput, NavigationUncheckedUpdateWithoutParentInput>
  }

  export type NavigationUpdateManyWithWhereWithoutParentInput = {
    where: NavigationScalarWhereInput
    data: XOR<NavigationUpdateManyMutationInput, NavigationUncheckedUpdateManyWithoutParentInput>
  }

  export type NavigationScalarWhereInput = {
    AND?: NavigationScalarWhereInput | NavigationScalarWhereInput[]
    OR?: NavigationScalarWhereInput[]
    NOT?: NavigationScalarWhereInput | NavigationScalarWhereInput[]
    id?: StringFilter<"Navigation"> | string
    label?: StringFilter<"Navigation"> | string
    url?: StringNullableFilter<"Navigation"> | string | null
    isActive?: BoolFilter<"Navigation"> | boolean
    parentId?: StringNullableFilter<"Navigation"> | string | null
    createdAt?: DateTimeFilter<"Navigation"> | Date | string
    updatedAt?: DateTimeFilter<"Navigation"> | Date | string
    order?: IntFilter<"Navigation"> | number
  }

  export type ItemTypeCreateWithoutItemCategoryInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    items?: ItemCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeUncheckedCreateWithoutItemCategoryInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    items?: ItemUncheckedCreateNestedManyWithoutItemTypeInput
  }

  export type ItemTypeCreateOrConnectWithoutItemCategoryInput = {
    where: ItemTypeWhereUniqueInput
    create: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput>
  }

  export type ItemTypeCreateManyItemCategoryInputEnvelope = {
    data: ItemTypeCreateManyItemCategoryInput | ItemTypeCreateManyItemCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ItemTypeUpsertWithWhereUniqueWithoutItemCategoryInput = {
    where: ItemTypeWhereUniqueInput
    update: XOR<ItemTypeUpdateWithoutItemCategoryInput, ItemTypeUncheckedUpdateWithoutItemCategoryInput>
    create: XOR<ItemTypeCreateWithoutItemCategoryInput, ItemTypeUncheckedCreateWithoutItemCategoryInput>
  }

  export type ItemTypeUpdateWithWhereUniqueWithoutItemCategoryInput = {
    where: ItemTypeWhereUniqueInput
    data: XOR<ItemTypeUpdateWithoutItemCategoryInput, ItemTypeUncheckedUpdateWithoutItemCategoryInput>
  }

  export type ItemTypeUpdateManyWithWhereWithoutItemCategoryInput = {
    where: ItemTypeScalarWhereInput
    data: XOR<ItemTypeUpdateManyMutationInput, ItemTypeUncheckedUpdateManyWithoutItemCategoryInput>
  }

  export type ItemTypeScalarWhereInput = {
    AND?: ItemTypeScalarWhereInput | ItemTypeScalarWhereInput[]
    OR?: ItemTypeScalarWhereInput[]
    NOT?: ItemTypeScalarWhereInput | ItemTypeScalarWhereInput[]
    id?: StringFilter<"ItemType"> | string
    name?: StringFilter<"ItemType"> | string
    isActive?: BoolFilter<"ItemType"> | boolean
    isStackable?: BoolFilter<"ItemType"> | boolean
    createdAt?: DateTimeFilter<"ItemType"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ItemType"> | Date | string | null
    itemCategoryId?: StringFilter<"ItemType"> | string
  }

  export type ItemCategoryCreateWithoutItemTypeInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemCategoryUncheckedCreateWithoutItemTypeInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemCategoryCreateOrConnectWithoutItemTypeInput = {
    where: ItemCategoryWhereUniqueInput
    create: XOR<ItemCategoryCreateWithoutItemTypeInput, ItemCategoryUncheckedCreateWithoutItemTypeInput>
  }

  export type ItemCreateWithoutItemTypeInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemUncheckedCreateWithoutItemTypeInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemCreateOrConnectWithoutItemTypeInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput>
  }

  export type ItemCreateManyItemTypeInputEnvelope = {
    data: ItemCreateManyItemTypeInput | ItemCreateManyItemTypeInput[]
    skipDuplicates?: boolean
  }

  export type ItemCategoryUpsertWithoutItemTypeInput = {
    update: XOR<ItemCategoryUpdateWithoutItemTypeInput, ItemCategoryUncheckedUpdateWithoutItemTypeInput>
    create: XOR<ItemCategoryCreateWithoutItemTypeInput, ItemCategoryUncheckedCreateWithoutItemTypeInput>
    where?: ItemCategoryWhereInput
  }

  export type ItemCategoryUpdateToOneWithWhereWithoutItemTypeInput = {
    where?: ItemCategoryWhereInput
    data: XOR<ItemCategoryUpdateWithoutItemTypeInput, ItemCategoryUncheckedUpdateWithoutItemTypeInput>
  }

  export type ItemCategoryUpdateWithoutItemTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCategoryUncheckedUpdateWithoutItemTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUpsertWithWhereUniqueWithoutItemTypeInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutItemTypeInput, ItemUncheckedUpdateWithoutItemTypeInput>
    create: XOR<ItemCreateWithoutItemTypeInput, ItemUncheckedCreateWithoutItemTypeInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutItemTypeInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutItemTypeInput, ItemUncheckedUpdateWithoutItemTypeInput>
  }

  export type ItemUpdateManyWithWhereWithoutItemTypeInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemTypeInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    value?: FloatFilter<"Item"> | number
    imageUrlId?: StringNullableFilter<"Item"> | string | null
    isActive?: BoolFilter<"Item"> | boolean
    isLimied?: BoolFilter<"Item"> | boolean
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Item"> | Date | string | null
    itemTypeId?: StringFilter<"Item"> | string
  }

  export type ItemTypeCreateWithoutItemsInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemCategory: ItemCategoryCreateNestedOneWithoutItemTypeInput
  }

  export type ItemTypeUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    itemCategoryId: string
  }

  export type ItemTypeCreateOrConnectWithoutItemsInput = {
    where: ItemTypeWhereUniqueInput
    create: XOR<ItemTypeCreateWithoutItemsInput, ItemTypeUncheckedCreateWithoutItemsInput>
  }

  export type ItemTypeUpsertWithoutItemsInput = {
    update: XOR<ItemTypeUpdateWithoutItemsInput, ItemTypeUncheckedUpdateWithoutItemsInput>
    create: XOR<ItemTypeCreateWithoutItemsInput, ItemTypeUncheckedCreateWithoutItemsInput>
    where?: ItemTypeWhereInput
  }

  export type ItemTypeUpdateToOneWithWhereWithoutItemsInput = {
    where?: ItemTypeWhereInput
    data: XOR<ItemTypeUpdateWithoutItemsInput, ItemTypeUncheckedUpdateWithoutItemsInput>
  }

  export type ItemTypeUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemCategory?: ItemCategoryUpdateOneRequiredWithoutItemTypeNestedInput
  }

  export type ItemTypeUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    itemCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type NavigationCreateManyParentInput = {
    id?: string
    label: string
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: number
  }

  export type NavigationUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    children?: NavigationUpdateManyWithoutParentNestedInput
  }

  export type NavigationUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    children?: NavigationUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NavigationUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ItemTypeCreateManyItemCategoryInput = {
    id?: string
    name: string
    isActive?: boolean
    isStackable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemTypeUpdateWithoutItemCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeUncheckedUpdateWithoutItemCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: ItemUncheckedUpdateManyWithoutItemTypeNestedInput
  }

  export type ItemTypeUncheckedUpdateManyWithoutItemCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStackable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateManyItemTypeInput = {
    id?: string
    name: string
    value?: number
    imageUrlId?: string | null
    isActive?: boolean
    isLimied?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ItemUpdateWithoutItemTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateWithoutItemTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemUncheckedUpdateManyWithoutItemTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    imageUrlId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLimied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}