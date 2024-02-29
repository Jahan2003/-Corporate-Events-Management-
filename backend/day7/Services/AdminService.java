package com.example.demo.Services;

import java.util.List;

import com.example.demo.Dto.AdminDto;

public interface AdminService {
    AdminDto createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long adminId);

    List<AdminDto> getAllAdmins();
}
