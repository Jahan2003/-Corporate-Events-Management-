package com.example.demo.Mapper;

import com.example.demo.Dto.UserDto;
import com.example.demo.Model.User;

public class UserMapper {
    
    public static UserDto maptoUserDto(User user){
        return new UserDto(
            user.getId(),
            user.getEmail(),
            user.getMobileNumber(),
            user.getPassword(),
            user.getOrganizationName()
        );
    }
    public static User maptoUser(UserDto userDto){
        return new User(
            userDto.getId(),
            userDto.getEmail(),
            userDto.getMobileNumber(),
            userDto.getPassword(),
            userDto.getOrganizationName()
        );
    }
}
