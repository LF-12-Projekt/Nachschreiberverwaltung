CREATE DATABASE IF NOT EXISTS MakeupExamDB;
USE MakeupExamDB;

CREATE TABLE IF NOT EXISTS User (
    ssId VARCHAR(30) PRIMARY KEY,
    username VARCHAR(30),
    role ENUM('teacher', 'student')
);
CREATE TABLE IF NOT EXISTS Course (
    courseId VARCHAR(30) PRIMARY KEY,
    courseName VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS StudentCourse (
    ssId VARCHAR(30),
    courseId VARCHAR(30),
    PRIMARY KEY (ssId, courseId),
    FOREIGN KEY (ssId) REFERENCES User(ssId)  ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Course(courseId)  ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS Room (
    roomId VARCHAR(30) PRIMARY KEY,
    roomName VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS ResitExamCourse (
    resitId VARCHAR(30) PRIMARY KEY,
    resitName VARCHAR(30),
    courseId VARCHAR(30),
    date DATE,
    time TIME,
    room VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES Course(courseId)  ON DELETE CASCADE,
    FOREIGN KEY (room) REFERENCES Room(roomId)  ON DELETE CASCADE
);
/* Dummy Daten zu Testzwecken*/
INSERT INTO User (ssId, username, role) VALUES
('123456789', 'stefanus', 'teacher'),
('987654321', 'brigitte', 'teacher'),
('555555555', 'hans', 'student');
INSERT INTO Course (courseId, courseName) VALUES
('1', 'LF11a'),
('2', 'LF10a'),
('3', 'LF12a');
INSERT INTO StudentCourse (ssId, courseId) VALUES
('123456789', '1'),
('123456789', '2'),
('987654321', '3'),
('555555555', '1'),
('555555555', '2');
INSERT INTO Room (roomId, roomName) VALUES
('1', 'Raum 101'),
('2', 'Raum 102'),
('3', 'Raum 103');
INSERT INTO ResitExamCourse (resitId, resitName, courseId, date, time, room) VALUES
('R123', 'LF11a Nachschreiber', '1', '2025-03-01', '09:00:00', '1'),
('R124', 'LF10a Nachschreiber', '2', '2025-03-02', '14:00:00', '2'),
('R125', 'LF12a Nachschreiber', '3', '2025-03-03', '11:00:00', '3'),
('R126', 'LF11a Nachschreiber', '1', '2025-03-05', '13:00:00', '1'),
('R127', 'LF10a Nachschreiber', '2', '2025-03-06', '15:00:00', '2');

