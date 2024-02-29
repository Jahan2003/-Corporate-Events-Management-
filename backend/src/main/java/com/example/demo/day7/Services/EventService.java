package com.example.demo.Services;

import java.util.List;

import com.example.demo.Dto.EventDto;

public interface EventService {
    EventDto createEvent(EventDto eventDto);

    EventDto getEventById(Long eventId);

    List<EventDto> getAllEvents();
}
