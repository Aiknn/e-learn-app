package kz.yerlan.elearn.dao;

import kz.yerlan.elearn.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Page<Course> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);
    Page<Course> findByCategory(@RequestParam("category") String category, Pageable pageable);
}
