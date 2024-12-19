import {
  Controller,
  HttpCode,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Request() req) {
    const token = this.authService.login(req.user.id);
    return token;
  }

  @Post('refresh')
  refreshToken(@Req() req) {
    return this.authService.refreshToken(req.id);
  }
}
