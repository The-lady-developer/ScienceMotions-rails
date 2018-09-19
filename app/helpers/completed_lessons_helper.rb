module CompletedLessonsHelper
    # I know the method name sucks a little
    def show_if_completed_lesson_id_is_31(completed_lesson = @completed_lesson)
      if completed_lesson.lesson_id==31
        "Hello"
      else
        "Anonymous"
      end
    end
end