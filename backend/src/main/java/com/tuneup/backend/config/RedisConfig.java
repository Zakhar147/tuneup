package com.tuneup.backend.config;
import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RedisConfig {

    @Value("${redis.url}")
    private String redisUrl;

    @Bean
    public RedisClient redisClient() {
        return RedisClient.create(redisUrl);
    }

    @Bean
    public StatefulRedisConnection<String, String> redisConnection(RedisClient redisClient) {
        return redisClient.connect();
    }
}
