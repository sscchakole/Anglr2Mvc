using Angular2Mvc.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Angular2Mvc.DBContext
{
    public class AuthRepository : IDisposable
    {
        private AuthContext _ctx;

        private UserManager<ApplicationUser> _userManager;

        public AuthRepository()
        {
            _ctx = new AuthContext();
            _userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(_ctx));
        }

        public async Task<IdentityResult> RegisterUser(User user)
        {
            var idenityUser = new ApplicationUser
            {
                UserName = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                //Password = user.Password
            };

            var result = await _userManager.CreateAsync(idenityUser, user.Password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser idenityUser = await _userManager.FindAsync(userName, password);

            return idenityUser;
        }

        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();
        }
    }
}