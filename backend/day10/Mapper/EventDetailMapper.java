package com.example.demo.Mapper;
import com.example.demo.Dto.EventDetailDto;
import com.example.demo.Model.EventDetail;

public class EventDetailMapper {
    public static EventDetailDto mapToEventDetailDto(EventDetail eventDetail) {
        return new EventDetailDto(
            eventDetail.getId(),
            eventDetail.getEvent(),
            eventDetail.getDescription(),
            eventDetail.getStartingPrice()
        );
    }
    
    public static EventDetail mapToEventDetail(EventDetailDto eventDetailDto) {
        return new EventDetail(
            eventDetailDto.getId(),
            eventDetailDto.getEvent(),
            eventDetailDto.getDescription(),
            eventDetailDto.getStartingPrice()
        );
    }
}