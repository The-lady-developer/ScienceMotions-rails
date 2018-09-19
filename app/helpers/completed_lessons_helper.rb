module CompletedLessonsHelper
    # I know the method name sucks a little
    # def show_if_completed_lesson_id_is_completed(completed_lesson = @completed_lesson)
    #   if completed_lesson.completed==true
    #     "completed"
    #   else
    #     "not completed"
    # end
    # end

    def is_lesson_already_in_completed_lessons(lesson = @lesson, completed_lesson = @completed_lesson)
        five = 5.even?()
        # lessons.compare?(completed_lessons) #true

        lesson_id = lesson.id
        completed_lesson_id = completed_lesson.lesson_id
        completed_lesson_completed = completed_lesson.completed

        puts lesson_id
        puts completed_lesson_id
        puts completed_lesson_completed

        puts "bum face!!"

        if lesson_id=completed_lesson_id
            "lesson is completed"
          else
            "lesson not completed"
        end

        # if @completed_lesson.lesson_id==31
        #     puts "completed_lesson 31"
        #   else
        #     puts "completed_lesson not 31"
        # end
        # if lesson.id==completed_lesson.id
        #   "completed"
        # else
        #   "not completed"
        # end
    end


end