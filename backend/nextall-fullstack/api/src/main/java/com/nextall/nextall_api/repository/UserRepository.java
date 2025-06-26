package com.nextall.nextall_api.repository;

import com.nextall.nextall_api.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

