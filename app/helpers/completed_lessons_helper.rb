module CompletedLessonsHelper
    # I know the method name sucks a little
    def show_if_completed_lesson_id_is_completed(completed_lesson = @completed_lesson)
      if completed_lesson.completed==true
        "completed"
      else
        "not completed"
      end
    end

    def is_lesson_already_in_completed_lessons(lessons = @lessons, completed_lessons = @completed_lessons)
        five = 5.even?()
        # lessons.compare?(completed_lessons) #true
        puts @lessons #true
        puts "hai"
        puts five

        # if lesson.id==completed_lesson.id
        #   "completed"
        # else
        #   "not completed"
        # end
    end


end