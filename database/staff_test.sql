/*
 Navicat Premium Data Transfer

 Source Server         : Mysql Server Test
 Source Server Type    : MySQL
 Source Server Version : 
 Source Host           : 
 Source Schema         : 

 Target Server Type    : 
 Target Server Version : 
 File Encoding         : 

 Date: 07/12/2020 00:03:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for staff_test
-- ----------------------------
DROP TABLE IF EXISTS `staff_test`;
CREATE TABLE `staff_test`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of staff_test
-- ----------------------------
INSERT INTO `staff_test` VALUES (12, 'กัณหา ปักเขมายา', 'จอห์น', 'john', '1234');

SET FOREIGN_KEY_CHECKS = 1;
