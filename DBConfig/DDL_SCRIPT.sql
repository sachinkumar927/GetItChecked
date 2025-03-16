-- Create the database
CREATE DATABASE getitchecked;

-- Use the database
USE getitchecked;

-- Table structure for table `assignment`
CREATE TABLE `assignment` (
  `assignment_id` INT(11) NOT NULL AUTO_INCREMENT,
  `facultyId` VARCHAR(50) NOT NULL,
  `file_data` LONGBLOB NOT NULL, -- Stores the PDF file data
  `sub_code` VARCHAR(50) NOT NULL,
  `last_date` DATE NOT NULL,
  PRIMARY KEY (`assignment_id`),
  KEY `facultyId` (`facultyId`),
  CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`facultyId`) REFERENCES `faculty` (`facultyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=10000000;

-- Table structure for table `faculty`
CREATE TABLE `faculty` (
  `fac_Id` VARCHAR(50) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `faculty_number` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `phonenumber` VARCHAR(50) NOT NULL,

  PRIMARY KEY (`facultyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=10000000;

-- Table structure for table `student`
CREATE TABLE `student` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `student_id` VARCHAR(50) NOT NULL UNIQUE,
  `phonenum` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `branch` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=10000000;

-- Table structure for table `upload`
CREATE TABLE `upload` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `aid` INT(11) NOT NULL, -- Assignment ID
  `usn` VARCHAR(50) NOT NULL, -- Student USN
  `file_data` LONGBLOB NOT NULL, -- Stores the PDF file data
  `marks` INT(11) DEFAULT NULL,
  `type` VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `upload_ibfk_1` FOREIGN KEY (`usn`) REFERENCES `student` (`student_id`),
  CONSTRAINT `upload_ibfk_2` FOREIGN KEY (`aid`) REFERENCES `assignment` (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=10000000;
