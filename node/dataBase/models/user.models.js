const {Schema, model} = require('mongoose')

const teacherSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'manager', 'teacher']
    }
})

const classSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    classTeacher:{
        type: Schema.Types.ObjectId, ref: 'teacher',
        required: true
    },
    monitor:{
        type: Schema.Types.ObjectId, ref: 'student',
        required: true
    }
})
const studentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
       type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    class:{
        type: Schema.Types.ObjectId, ref: 'class',
        required: true
    },
    role: {
        type: String,
        enum: 'student'
    }

})

const schoolSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    director:{
        type: Schema.Types.ObjectId, ref: 'teacher',
        required: true
    }

})

const lessonShema = new Schema({
    name:{
        type: String,
        required: true
    },
    teacher:{
        type: Schema.Types.ObjectId, ref: 'teacher',
        required: true
    }
})

const scheduleSchema = new Schema({
    class:{
        type: Schema.Types.ObjectId, ref: 'class',
        required: true
    },
    lesson:{
        type: Schema.Types.ObjectId, ref: 'lesson',
        required: true
    }
})
const raitingSchema = new Schema({
    student:{
        type: Schema.Types.ObjectId, ref:'student',
        required: true
    },
    lesson:{
        type: Schema.Types.ObjectId, ref: 'lesson',
        required: true,
    },
    mark:{
        type: Number
    }
})

module.exports = model('teacher', teacherSchema)
module.exports = model('school', schoolSchema)
module.exports = model('class', classSchema)
module.exports = model('student', studentSchema)
module.exports = model('lesson', lessonShema)
module.exports = model('schedule', scheduleSchema)
module.exports = model('raiting', raitingSchema)