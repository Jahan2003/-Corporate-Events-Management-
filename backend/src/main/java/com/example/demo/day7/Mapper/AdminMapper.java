package com.example.demo.Mapper;

import com.example.demo.Dto.AdminDto;
import com.example.demo.Model.Admin;

public class AdminMapper {
    public static AdminDto mapToAdminDto(Admin admin) {
        return new AdminDto(
            admin.getId(),
            admin.getEmail(),
            admin.getMobileNumber(),
            admin.getPassword()
        );
    }
    
    public static Admin mapToAdmin(AdminDto adminDto) {
        return new Admin(
            adminDto.getId(),
            adminDto.getEmail(),
            adminDto.getMobileNumber(),
            adminDto.getPassword()
        );
    }
}
