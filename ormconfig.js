module.exports = {
   "type": "mariadb",
   "host": process.env.TYPEORM_HOST,
   "port": process.env.TYPEORM_PORT,
   "username": process.env.TYPEORM_USERNAME,
   "password": process.env.TYPEORM_PASSWORD,
   "database": process.env.TYPEORM_DATABASE,
   "synchronize": false,
   "logging": false,
   "entities": [
      process.env.NODE_ENV === 'development' ?
         "src/models/**/*.ts" :
         "dist/models/**/*.js"
   ],
   "migrations": ["src/migration/*.ts"],
   "subscribers": ["src/subscriber/**/*.ts"],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
