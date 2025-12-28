package com.setmygoal.backend.dto;

import lombok.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {

    private String title;
    private String description;
    private List<String> modules;
}
