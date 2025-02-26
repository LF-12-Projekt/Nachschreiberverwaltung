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
CREATE TABLE IF NOT EXISTS TeacherCourse (
    ssId VARCHAR(30),
    courseId VARCHAR(30),
    PRIMARY KEY (ssId, courseId),
    FOREIGN KEY (ssId) REFERENCES User(ssId)  ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Course(courseId)  ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS Class (
    classId VARCHAR(30) PRIMARY KEY,
    className VARCHAR(30),
    teacher VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (teacher) REFERENCES User(ssId)  ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS ClassCourse (
    classId VARCHAR(30),
    courseId VARCHAR(30),
    PRIMARY KEY (classId, courseId),
    FOREIGN KEY (classId) REFERENCES Class(classId)  ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES Course(courseId)  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Room (
    roomId VARCHAR(30) PRIMARY KEY,
    roomName VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS Exam (
    examId VARCHAR(30) PRIMARY KEY,
    examName VARCHAR(30),
    courseId VARCHAR(30),
    date DATE,
    time TIME,
    room VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES Course(courseId)  ON DELETE CASCADE,
    FOREIGN KEY (room) REFERENCES Room(roomId)  ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS ResitExam (
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
CREATE TABLE IF NOT EXISTS ExamStudent (
    examId VARCHAR(30),
    ssId VARCHAR(30),
    attest BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (examId, ssId),
    FOREIGN KEY (examId) REFERENCES Exam(examId)  ON DELETE CASCADE,
    FOREIGN KEY (ssId) REFERENCES User(ssId)  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ResitExamStudent (
    resitId VARCHAR(30),
    ssId VARCHAR(30),
    attest BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (resitId, ssId),
    FOREIGN KEY (resitId) REFERENCES ResitExam(resitId)  ON DELETE CASCADE,
    FOREIGN KEY (ssId) REFERENCES User(ssId)  ON DELETE CASCADE
);
/* Dummy Daten zu Testzwecken*/
INSERT INTO User (ssId, username, role) VALUES
('123456789', 'test', 'teacher'),
('987654321', 'test', 'student'),
('555555555', 'test', 'student'),
('111111111', 'test', 'teacher'),
('222222222', 'test', 'student'),
('333333333', 'test', 'student');

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
INSERT INTO TeacherCourse (ssId, courseId) VALUES
('111111111', '1'),
('111111111', '2'),
('111111111', '3');
INSERT INTO Class (classId, className, teacher) VALUES
('1', 'FAB-22', '123456789'),
('2', 'FAB-23', '123456789'),
('3', 'FAB-24', '123456789');
INSERT INTO Room (roomId, roomName) VALUES
('1', 'Raum 101'),
('2', 'Raum 102'),
('3', 'Raum 103');
INSERT INTO Exam (examId, examName, courseId, date, time, room) VALUES
('E123', 'LF11a Klausur', '1', '2025-02-01', '09:00:00', '1'),
('E124', 'LF10a Klausur', '2', '2025-02-02', '14:00:00', '2'),
('E125', 'LF12a Klausur', '3', '2025-02-03', '11:00:00', '3'),
('E126', 'LF11a Klausur', '1', '2025-02-05', '13:00:00', '1'),
('E127', 'LF10a Klausur', '2', '2025-02-06', '15:00:00', '2');
INSERT INTO ResitExam (resitId, resitName, courseId, date, time, room) VALUES
('R123', 'LF11a Nachschreiber', '1', '2025-03-01', '09:00:00', '1'),
('R124', 'LF10a Nachschreiber', '2', '2025-03-02', '14:00:00', '2'),
('R125', 'LF12a Nachschreiber', '3', '2025-03-03', '11:00:00', '3'),
('R126', 'LF11a Nachschreiber', '1', '2025-03-05', '13:00:00', '1'),
('R127', 'LF10a Nachschreiber', '2', '2025-03-06', '15:00:00', '2');
INSERT INTO ResitExamStudent (resitId, ssId, attest) VALUES
('R123', '987654321', TRUE),
('R124', '987654321', TRUE),
('R125', '987654321', FALSE),
('R126', '555555555', TRUE),
('R127', '555555555', FALSE);
INSERT INTO ExamStudent (examId, ssId, attest) VALUES
('E123', '222222222', TRUE),
('E124', '222222222', TRUE),
('E125', '333333333', FALSE),
('E126', '555555555', TRUE),
('E127', '555555555', FALSE);
INSERT INTO ClassCourse (classId, courseId) VALUES
('1', '1'),
('2', '2'),
('3', '3');
