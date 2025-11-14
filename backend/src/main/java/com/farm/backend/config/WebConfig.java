package com.farm.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("http://localhost:3000")   // React 주소
                .allowedMethods("*")                              // GET, POST, PUT 등
                .allowedHeaders("*")                              // 모든 헤더 허용
                .allowCredentials(true);                          // 쿠키/인증 허용
    }
}
