
package com.grass.project.service;

import com.grass.project.repository.grantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GrantService {
    @Autowired
    private grantRepository g_repo;
}

