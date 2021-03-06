module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      tableName: "images",
      charset: "utf8",
      collate: "utf8_general_ci", // mb4=> 이모티콘 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
