package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id;

    @Column(name = "event_name", nullable = false)
    private String name;

    @Column(name = "organization_name", nullable = false)
    private String organization;

    @Column(name = "contact_email", nullable = false, unique = true)
    private String email;

    @Column(name = "contact_mobile", nullable = false, unique = true)
    private String mobile;

    @Column(name = "event_city", nullable = false)
    private String city;

    @Column(name = "event_venue", nullable = false)
    private String venue;

    @Column(name = "start_date", nullable = false)
    private LocalDate fromDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate toDate;

    @Column(name = "attendee_count", nullable = false)
    private Integer attendees;

    @Lob
    @Column(name = "theme_file", nullable = true)
    private byte[] themeFile;

    @Column(name = "event_enquiry", nullable = true)
    private String enquiry;

    @Column(name = "other_details", nullable = true)
    private String otherDetails;
}

