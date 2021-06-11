CREATE SCHEMA `image_db` ;

CREATE TABLE `image_db`.`ImageList` (
  `ImageId` INT NOT NULL AUTO_INCREMENT,
  `ImageDescription` VARCHAR(50) NOT NULL,
  `ImagePath` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`ImageId`),
  UNIQUE INDEX `ImageId_UNIQUE` (`ImageId` ASC) VISIBLE);


INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageA', 'assets/images/1.jpg');
INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageB', 'assets/images/4.jpg');
INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageC', 'assets/images/8.jpg');
INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageD', 'assets/images/10.jpg');
INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageE', 'assets/images/14.jpg');
INSERT INTO `image_db`.`ImageList` (`ImageDescription`, `ImagePath`) VALUES ('ImageF', 'assets/images/21.jpg');
