
package com.nextall.nextall_api.service;

import com.nextall.nextall_api.model.entities.User;
import com.nextall.nextall_api.model.dto.CreateUserDto;
import com.nextall.nextall_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {

        return userRepository.findAll();
    }

    public User createUser(CreateUserDto data) {
        var entity = new User(
                data.email(),
                data.senha());

        return userRepository.save(entity);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}

