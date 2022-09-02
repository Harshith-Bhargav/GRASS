package com.grass.project.model;

import com.grass.project.repository.adminRepository;
import com.sun.istack.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AdminDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private adminRepository AdminRepository;
//    @Autowired
//    private Admin admn;

//    public AdminDetailsServiceImpl(adminRepository AdminRepository) {
//        this.AdminRepository = AdminRepository;
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Admin admin = AdminRepository.findByUsername(username);
        if (admin == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(admin.getUsername(), admin.getPassword(), new ArrayList<>()) {

        };
    }
    private static final class CustomUserDetails extends Admin implements UserDetails {
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_" + this.getRole());
        }

        CustomUserDetails(@NotNull Admin admin) {
            super();
        }

        @Override
        public String getUsername() {
            return this.getUsername();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }

    }
}