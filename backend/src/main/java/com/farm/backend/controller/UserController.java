package com.farm.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    @GetMapping("/api/users")
    public List<String> getUsers() {
        // 예시 데이터
        return Arrays.asList("홍길동", "김철수", "이영희");
    }
}
