package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Dto.AdminDto;
import com.example.demo.Model.Admin;
import com.example.demo.Mapper.AdminMapper;
import com.example.demo.Repository.AdminRepository;
import com.example.demo.ResourceNotFoundException.ResourceNotFoundException;
import com.example.demo.Services.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminController implements AdminService {

    private final AdminRepository adminRepository;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.mapToAdmin(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    @Override
    public AdminDto getAdminById(Long adminId) {
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + adminId));
        return AdminMapper.mapToAdminDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();
        List<AdminDto> adminDtos = new ArrayList<>();
        for (Admin admin : admins) {
            adminDtos.add(AdminMapper.mapToAdminDto(admin));
        }
        return adminDtos;
    }
}
