#include <emscripten.h>
#include <chrono>
#include <thread>


extern "C" {
  void MSleep(const int64_t);
  void NSleep(const int64_t);
  void Sleep(const int64_t);
  void USleep(const int64_t);
}


#define X(name, unit)                                                          \
EMSCRIPTEN_KEEPALIVE                                                           \
void name(const int64_t duration) {                                            \
  std::this_thread::sleep_for(std::chrono::unit(duration));                    \
}

X(MSleep, milliseconds);
X(NSleep, nanoseconds);
X(Sleep, seconds);
X(USleep, microseconds);
#undef X
