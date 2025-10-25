package edu.icet.crm.config;


import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableMethodSecurity
public class Config {

    @Bean
    public ModelMapper getMapper(){
          return new ModelMapper();
    }

    //Security Config
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity
//                    .csrf(csrf -> csrf.disable())
//                    .authorizeHttpRequests(
//                        auth->auth
//                                .requestMatchers("/appointment/**").permitAll()
//                                .anyRequest().permitAll()
//                )
//                .httpBasic(Customizer.withDefaults());
//        return httpSecurity.build();
//    }
//
//
//    @Bean
//    public PasswordEncoder encoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder){
//        UserDetails user = User
//                .withUsername("user")
//                .password(passwordEncoder.encode("1234"))
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User
//                .withUsername("admin")
//                .password(passwordEncoder.encode("1234"))
//                .roles("ADMIN")
//                .build();
//
//        return new InMemoryUserDetailsManager(user,admin);
//    }
}
