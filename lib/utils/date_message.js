"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = void 0;

const date = msg => {
  const day = msg.createdAt.getDate() < 10 ? `0${msg.createdAt.getDate()}` : msg.createdAt.getDate();
  const month = msg.createdAt.getMonth() < 10 ? `0${msg.createdAt.getMonth()}` : msg.createdAt.getMonth();
  const year = msg.createdAt.getFullYear();
  const hour = msg.createdAt.getHours() < 10 ? `0${msg.createdAt.getHours()}` : msg.createdAt.getHours();
  const minutes = msg.createdAt.getMinutes() < 10 ? `0${msg.createdAt.getMinutes()}` : msg.createdAt.getMinutes();
  return `${day}/${month}/${year} (${hour}:${minutes})`;
};

exports.date = date;