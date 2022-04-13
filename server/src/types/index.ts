export enum DbType {
  Mongo = 'mongo',
  MySql = 'mySql',
}

export enum DbMongoType {
  Atlas = 'atlas',
  Static = 'static',
}

export enum DbMySqlType {}

export type GetDbTypePath = {
  dbType: DbType;
  subDbType: DbMongoType;
};

// export type SubDbType = typeof DbMongoType | typeof DbMySqlType;
