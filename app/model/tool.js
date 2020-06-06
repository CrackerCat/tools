"use strict";

module.exports = (app) => {
  const { INTEGER, STRING } = app.Sequelize;
  const Tool = app.model.define("Tool", {
    id: {
      type: INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },

    // 名称
    name: {
      type: STRING(100),
      defaultValue: "",
    },

    // 地址
    url: {
      type: STRING(255),
      defaultValue: "",
      unique: true,
    },

    // 描述
    desc: {
      type: STRING(255),
      defaultValue: "",
    },

    // 状态
    status: {
      type: STRING(10),
      values: ["DONE", "WORKING", "DISABLED"],
      defaultValue: "DONE",
    },

    // 使用次数
    used: {
      type: INTEGER,
      defaultValue: 0,
    },
  });
  return Tool;
};
