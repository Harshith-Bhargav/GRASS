package com.grass.project.service;

/*
import com.grass.project.model.registration;
import com.grass.project.repository.registrationImpl;
import com.grass.project.repository.registrationRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class registrationServiceImpl implements registrationService {

    @Autowired
    private registrationRepository userDao;

    @Autowired
    private registrationImpl userDaoImpl;

    @Override
    public ApiResponse signUp(SignUpDto signUpDto) {
        validateSignUp(signUpDto);
        registration user = new registration();
        //can use Bcrypt
        BeanUtils.copyProperties(signUpDto, user);
        userDaoImpl.save(user);
        return new ApiResponse(200, "success", user);
    }

    @Override
    public ApiResponse login(LoginDto loginDto) {
        registration user = userDao.findByUsername(loginDto.getUsername());
        if(user == null) {
            throw new RuntimeException("User does not exist.");
        }
        if(!user.getPassword().equals(loginDto.getPassword())){
            throw new RuntimeException("Password mismatch.");
        }
        return new ApiResponse(200, "Login success", null) ;

    }

    private void validateSignUp(SignUpDto signUpDto) {
    }
}*/
